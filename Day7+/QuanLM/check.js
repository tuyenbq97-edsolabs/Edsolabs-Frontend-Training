
        function isEmpty(){
            let name = document.getElementById("txt_User").value;
            let pass = document.getElementById("txt_Pass").value;
            let email = document.getElementById("txt_Email").value;
            
            if (name == ''){
                document.getElementById("error_user").innerHTML = "Tên đăng nhập không được trống";
            }
            if (pass == '') {
                document.getElementById("error_pass").innerHTML = "Mật khẩu không được trống";
            }
            if (email == ''){
                document.getElementById("error_email").innerHTML = "Email không được trống";
            }
        }

        function charMin(){
            let name = document.getElementById("txt_User").value;
            let pass = document.getElementById("txt_Pass").value;
            let phone = document.getElementById("txt_Phone").value;
            
            if(0 < name.length && name.length <= 4){
                document.getElementById("error_user").innerHTML = "Tên Đăng nhập tối thiểu 5 kí tự";
            }
            else {
                console.log(name.length);
            }
            // (0 < name.length && name.length <= 4) ? document.getElementById("error_user").innerHTML = "Tên Đăng nhập tối thiểu 5 kí tự" : console.log("user: " +name.length);
            if(0 < pass.length && pass.length <= 7){
                
                document.getElementById("error_pass").innerHTML = "Mật Khẩu tối thiểu 8 kí tự";
            }
            // (0 < pass.length && pass.length <= 7) ? document.getElementById("error_pass").innerHTML = "Mật Khẩu tối thiểu 8 kí tự" : console.log("pass: " + pass.length);
            if(phone.length != 10){
                document.getElementById("error_phone").innerHTML = "Số điện thoại không hợp lệ";
            }
            // (phone.length != 10) ? document.getElementById("error_phone").innerHTML = "Số điện thoại không hợp lệ" : console.log("phone: " + phone.length);
        }

        function specialChar(){
            let name = document.getElementById("txt_User").value;
            let reg = /\W|_/g;
            let result = reg.test(name);
            if(result == true ){
                document.getElementById("error_user").innerHTML = "Không được chứa kí tự đặc biệt";
            }
        }

        function submitPass(){
            let pass = document.getElementById("txt_Pass").value;
            let subPass = document.getElementById("txt_SubmitPass").value;
            // if(pass !== subPass) {
            //     document.getElementById("error_subPass").innerHTML = "Mật khẩu không giống nhau";
            // }
            pass != subPass ? document.getElementById("error_subPass").innerHTML = "Mật khẩu không giống nhau" : console.log("subPass: " + subPass.length);
        }

        function formatEmail(){
            let email = document.getElementById("txt_Email").value;
            let headFormat = email.indexOf("@");
            let tailFormat = email.lastIndexOf(".");
            if((headFormat < 1) || (tailFormat - headFormat < 2)) {
                document.getElementById("error_email").innerHTML = "Địa chỉ email không hợp lệ";
            }
        }
        function resetPage(){
            let name = document.getElementById("txt_User").value;
            let pass = document.getElementById("txt_Pass").value;
            let email = document.getElementById("txt_Email").value;
            let subPass = document.getElementById("txt_SubmitPass").value;
            let phone = document.getElementById("txt_Phone").value;
            let errorUser = '';
            document.getElementById("error_user").innerHTML = errorUser;
            let errorPass = '';
            document.getElementById("error_pass").innerHTML = errorPass;
            let errorEmail = '';
            document.getElementById("error_email").innerHTML = errorEmail;
            let errorSubPass = '';
            document.getElementById("error_subPass").innerHTML = errorSubPass;
            let errorPhone = '';
            document.getElementById("error_phone").innerHTML = errorPhone;
            let errorAddress = '';
            document.getElementById("error_address").innerHTML = errorAddress;
        }


        function Check() {
            resetPage();
            isEmpty();
            charMin();
            specialChar();
            submitPass();
            formatEmail();
        }