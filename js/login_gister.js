const userBtn = document.getElementById("userBtn");
const adminBtn = document.getElementById("adminBtn");
const rememberToggle = document.getElementById("rememberToggle");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");

// Thêm chức năng ẩn/hiện mật khẩu
const setupPasswordToggle = () => {
  // Lấy tất cả các biểu tượng mắt trong cả 2 form
  const eyeIcons = document.querySelectorAll('.form-group img[src*="eye.png"], .form-group img[src*="hidden.png"]');
  
  eyeIcons.forEach(icon => {
    // Kiểm tra xem sự kiện đã được gắn chưa để tránh gắn nhiều lần
    if (!icon.hasAttribute('data-toggle-bound')) {
      icon.setAttribute('data-toggle-bound', 'true');
      
      icon.addEventListener('click', function() {
        const input = this.closest('.form-group').querySelector('input[type="password"], input[type="text"]');
        const isPassword = input.type === 'password';
        
        // Thay đổi type của input
        input.type = isPassword ? 'text' : 'password';
        
        // Thay đổi biểu tượng mắt
        if (this.src.includes('hidden.png')) {
          this.src = 'assets/images/eye.png';
        } else {
          this.src = 'assets/images/hidden.png';
        }
        
        // Thêm hiệu ứng khi click
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 100);
      });
    }
  });
};

// Khởi tạo khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
  setupPasswordToggle();
  
  rememberToggle.addEventListener("click", () => {
    rememberToggle.classList.toggle("active");
  });

  userBtn.addEventListener("click", () => {
    userBtn.classList.add("active");
    userBtn.classList.remove("inactive");
    adminBtn.classList.remove("active");
    adminBtn.classList.add("inactive");
  });

  adminBtn.addEventListener("click", () => {
    adminBtn.classList.add("active");
    adminBtn.classList.remove("inactive");
    userBtn.classList.remove("active");
    userBtn.classList.add("inactive");
  });
});

function switchForm(mode) {
  if (mode === 'register') {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    formTitle.innerText = "Đăng ký";
    formSubtitle.innerText = "Chỉ vài bước đơn giản để tham gia cộng đồng đỗ xe thông minh RELIPARK!";
  } else {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.innerText = "Đăng nhập";
    formSubtitle.innerText = "Chào mừng bạn quay trở lại hệ thống RELIPARK";
  }
  
  // Khởi tạo lại chức năng toggle password sau khi chuyển form
  setTimeout(setupPasswordToggle, 50);
}

// Ngăn double click zoom trên mobile
document.addEventListener('dblclick', function(e) {
  e.preventDefault();
}, { passive: false });


function handleLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Ví dụ mật khẩu đúng là "123456"
    const correctPassword = "123456";

    if (password === correctPassword) {
      // Đăng nhập thành công
      window.location.href = "user.html";
    } else {
      // Báo lỗi
      alert("Mật khẩu không đúng. Vui lòng thử lại.");
    }
}