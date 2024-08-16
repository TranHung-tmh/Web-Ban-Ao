document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '0';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-250px';
    document.getElementById('overlay').style.display = 'none';
});
document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input[type=text]').value;
    // Thực hiện tìm kiếm với từ khóa 'query'
    console.log('Searching for:', query);
});

// Xử lý sự kiện click cho biểu tượng đăng nhập
document.querySelector('.login-icon').addEventListener('click', function() {
    // Điều hướng đến trang đăng nhập hoặc mở modal đăng nhập
    console.log('Redirecting to login page...');
});
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
        overlay.style.display = 'block';
    } else {
        sidebar.style.right = '-250px';
        overlay.style.display = 'none';
    }
}