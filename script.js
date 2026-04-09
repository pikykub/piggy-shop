// เปิด-ปิดเมนู Dropdown
function toggleUserMenu() {
    const dropdown = document.getElementById("userDropdown");
    const status = document.getElementById("userStatusText").innerText;

    if (status === "เข้าสู่ระบบ") {
        document.getElementById('loginModal').style.display = 'flex';
    } else {
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    }
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// ระบบ Google Login
function handleCredentialResponse(response) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    document.getElementById("userStatusText").innerText = "โปรไฟล์";
    document.getElementById("userName").innerText = payload.name;
    document.getElementById('loginModal').style.display = 'none';
    alert("เข้าสู่ระบบสำเร็จ! สวัสดีคุณ " + payload.name);
}

function handleLogout() {
    location.reload();
}

window.onclick = function(e) {
    if (e.target == document.getElementById('loginModal')) closeLogin();
    if (!e.target.matches('.user-btn') && !e.target.matches('.fa-user-circle')) {
        document.getElementById("userDropdown").style.display = "none";
    }
}
