<script type="text/javascript">
 function myfun()
  {
            var login, user = {};
            login = document.getElementById("login");
            login.onsubmit = function (event) 
            {
                event.preventDefault();
                user.username = document.getElementById("username").value;
                user.password = document.getElementById("psw").value;
            };
}
</script>
