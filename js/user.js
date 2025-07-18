function showFrame(id) {
      document.querySelectorAll('.frame').forEach(f => f.classList.remove('active'));
      document.getElementById(id).classList.add('active');
}

function confirmBooking() {
    const start = document.getElementById('startTime').value;
    const end = document.getElementById('endTime').value;
    const loc = document.getElementById('location').value;

    document.getElementById('finalTime').innerText = `${start} - ${end}`;
    document.getElementById('finalPosition').innerText = loc;
    document.getElementById('finalFee').innerText = '30.000đ'; // Cố định đơn giản

    showFrame('frame25');
}
function updateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeString = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('currentDate').textContent = dateString;
    document.getElementById('currentTime').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();
function setColorLabel() {

}