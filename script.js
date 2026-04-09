// 1. ระบบเมนู Profile
function toggleUserMenu() {
    const dropdown = document.getElementById("userDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// 2. ระบบเปิด/ปิดหน้า Login
document.getElementById('userBtn').onclick = function(e) {
    const status = document.getElementById('userStatus').innerText;
    if(status === "เข้าสู่ระบบ") {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        toggleUserMenu();
    }
    e.stopPropagation();
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// 3. ระบบ Google Login (ใช้งานจริง)
function handleCredentialResponse(response) {
    // ถอดรหัสข้อมูลจาก Google
    const responsePayload = parseJwt(response.credential);
    
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Email: ' + responsePayload.email);
    
    // อัปเดตหน้าเว็บหลังล็อกอินสำเร็จ
    document.getElementById('userStatus').innerText = "โปรไฟล์";
    document.getElementById('displayName').innerText = responsePayload.name;
    document.getElementById('loginModal').style.display = 'none';
    alert("เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับคุณ " + responsePayload.name);
}

// ฟังก์ชันถอดรหัสข้อมูลผู้ใช้
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function handleLogout() {
    document.getElementById('userStatus').innerText = "เข้าสู่ระบบ";
    document.getElementById("userDropdown").style.display = "none";
    location.reload(); // รีเฟรชหน้าเว็บ
}

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) closeLogin();
}
