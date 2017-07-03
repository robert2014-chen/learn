define("www_login", ["home"], function (home) {
    var Login = function () {
        this.__name = "Login", this.box = $(".login-body"), this.imgCode = $(".login-body img[id='img_vcode']")
    };
    return Login.prototype = {
        constructor: Login, tabsChange: function () {
            var o = this;
            o.box.on("click", "[data-tab-for]", function () {
                var o = $("[data-tab-for]"), i = $(".tab-box"), n = "#" + $(this).data("tab-for");
                o.addClass("active"), $(this).removeClass("active"), $(i).addClass("hide"), $(n).removeClass("hide")
            })
        }, loginForm: function () {
            function loginFormSubmit() {
                function o(o) {
                    return "" == mail.val().trim() ? (_tipsAdd(mail, "用户名不能为空"), !1) : "" != password.val().trim() || (_tipsAdd(password, "密码不能为空"), !1)
                }

                var i = !1;
                i = o(i), i && ($(tips_span).hide(), $.ajax({
                    url: page.hash_login,
                    type: "post",
                    data: {
                        email: mail.val(),
                        pwd: CryptoJS.SHA1(password.val()).toString(),
                        verifyCode: code.val(),
                        save_login: save_login[0].checked ? 1 : 0
                    },
                    success: function (o) {
                        var i, n, t;
                        if (form_button.html("正在登录...").attr("disabled", !0), o.length <= 0)return i = page.login_success, i.indexOf("nocache") < 0 && (n = i.indexOf("?") > -1, i = i + (n ? "&" : "?") + "nocache=" + (new Date).getTime()), void(window.location.href = i);
                        if (t = JSON.parse(o), t.error > 0 || t.failCount > 0) {
                            if (form_button.html("登录").attr("disabled", !1), (t.failCount > 2 || 1 == t.error) && (home._vCode(_this.imgCode), $(".v-code").addClass("show"), $("body").css("minHeight", "660px")), "验证码错误" == t.msg)return $("#f_vcode").focus(), _tipsAdd(code, t.msg), !1;
                            $("#f_vcode").val(""), _tipsAdd(form_button, t.msg)
                        }
                    }
                }))
            }

            function _tipsAdd(o, i) {
                var n = o.parents(".form-item").find(".form-tips");
                return i ? (tips_span.addClass("error").html(i).show(), o.addClass("error").focus(), void n.show().append(tips_span)) : (o.removeClass("error"), void n.hide())
            }

            var _this = this, form_login = $(".login-form"), mail = form_login.find("input[id='userMail']"), password = form_login.find("input[id='userPassword']"), code = form_login.find("input[id='f_vcode']"), save_login = form_login.find("input[id='save_login']"), form_button = form_login.find(".btn-login"), tips_span = $("<span />");
            form_login.on("keydown", "input", function (o) {
                return 13 === o.keyCode ? (loginFormSubmit(), !1) : void _tipsAdd($(this), null)
            }), _this.box.on("click", ".btn-login", function () {
                loginFormSubmit()
            }), _this.box.on("blur", "input[id='userPassword']", function () {
                $.ajax({
                    url: page.before_login + mail.val(), type: "post", dataType: "json", success: function (result) {
                        var json = eval(result);
                        (json.failCount > 2 || 1 == json.error) && (home._vCode(_this.imgCode), $(".v-code").addClass("show"), $("body").css("minHeight", "660px"))
                    }
                })
            })
        }, codeRefresh: function () {
            var o = this;
            o.box.on("click", ".v-code-img", function () {
                home._vCode(o.imgCode)
            })
        }, qrcodeLogin: function () {
            function o() {
                $.ajax({
                    url: page.get_qrcode, dataType: "json", cache: !1, success: function (o) {
                        $("#img_QrCode").attr("src", "data:image/jpg;base64," + o.qrCode), flag = self.setInterval(function () {
                            i(o.uuid)
                        }, 2e3)
                    }
                })
            }

            function i(o) {
                $.ajax({
                    url: page.long_connection, method: "POST", data: {uuid: o}, cache: !1, success: function (o) {
                        "success" == o ? location.href = page.login_success : null != o && "out of date" != o || location.reload()
                    }
                })
            }

            var n = this;
            n.box.on("click", '[data-tab-for="wechat_login"]', function () {
                o()
            })
        }, register: function () {
            this.tabsChange(), this.loginForm(), this.codeRefresh(), this.qrcodeLogin()
        }
    }, Login
});