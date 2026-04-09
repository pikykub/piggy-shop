// เปิด-ปิดเมนูโปรไฟล์
function toggleUserMenu() {
    const dropdown = document.getElementById("userDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// เปิด Login Modal (แก้ไขจากปุ่ม Login เดิม)
document.querySelector('.user-btn').onclick = function(e) {
    // ถ้ายังไม่ Login ให้เปิดหน้า Login
    document.getElementById('loginModal').style.display = 'flex';
    e.stopPropagation();
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// ปิด Dropdown เมื่อคลิกที่อื่น
window.onclick = function(event) {
    if (!event.target.matches('.user-btn') && !event.target.matches('.fa-user-circle')) {
        document.getElementById("userDropdown").style.display = "none";
    }
    if (event.target == document.getElementById('loginModal')) {
        closeLogin();
    }
}
