var targetDate = new Date("2024-02-15T00:00:00");

    function updateTimer() {
        var currentDate = new Date();
        var difference = targetDate - currentDate;

        var hours = Math.floor(difference / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

        if (difference <= 0) {
            clearInterval(timerInterval);
        }
    }

    var timerInterval = setInterval(updateTimer, 1000);

    function order() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    
    function confirmOrder() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        
        // Здесь вы можете добавить код для отправки данных на сервер или выполнения других действий
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        // Показываем сообщение об успешном оформлении заказа
        var successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
    
        // Закрываем модальное окно и очищаем поля формы через 5 секунд
        setTimeout(function(){
            successMessage.style.display = "none";
            document.getElementById("orderForm").reset(); // Сбрасываем значения формы
        }, 5000);
    }
    
    // Закрываем модальное окно, если пользователь кликает за его пределами
    window.onclick = function(event) {
      var modal = document.getElementById("myModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }