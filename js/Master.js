$(document).ready(function () {   

    $('a').each(function () {
        var link = $(this);
        var urlLink = $(this).attr('href');
        if (typeof link.attr('href') != 'undefined') {
            if ((link.attr('href').indexOf('/Download/') > -1) || (link.attr('href').indexOf('download.aspx') > -1) || (link.attr('href').indexOf('Download.aspx') > -1)) {
                var descricao = link.text().trim();
                link.attr('target', '_blank');

                if (descricao == '') {
                    descricao = urlLink.split('download.aspx?')[1];
                }

                var url = window.location.href;

                if (url.toLowerCase().indexOf('/listresultados.aspx') > -1) {
                    var ano = $(this).parents('div[id*=divResultados]').attr('ano');
                    var idLink = $(this).attr('id');
                    descricao = idLink.split('_')[4];

                    if ($(".hidLinguagem").val() == "ptg") {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_PT_" + ano + "'});");
                    } else {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_EN_" + ano + "'});");
                    }

                } else {
                    link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "'});");
                }
            }
        }
    });


    // Busca
    $(".inputBusca").keypress(function (event) {
        event = event || window.event;

        if (event.keyCode == '13') {
            Buscar();

            event.preventDefault();
        }
    });

    $(".inputBuscaMobile").keypress(function (event) {
        event = event || window.event;

        if (event.keyCode == '13') {
            BuscarMobile();

            event.preventDefault();
        }
    });

    $(".inputOk").click(function () {
        Buscar();
        event.preventDefault();
    });

    $(".inputOkMobile").click(function () {
        BuscarMobile();
        event.preventDefault();
    });



    var access_font_size = 0;

    if (localStorage.getItem('access_font_size')) {
        access_font_size = Number(localStorage.getItem('access_font_size'));
        accessApplyFont(access_font_size);
    }

    $('.icon-aumentar-fonte').on('click', function (e) {
        e.preventDefault();
        if (access_font_size < 25) {
            access_font_size += 6.25;
            accessApplyFont(access_font_size);
        }
    });

    $('.icon-diminuir-fonte').on('click', function (e) {
        e.preventDefault();
        if (access_font_size > 0) {
            access_font_size -= 6.25;
            accessApplyFont(access_font_size);
        }
    });



    var access_theme = "light";

    if (localStorage.getItem("access_theme")) {
        access_theme = localStorage.getItem("access_theme");
        accessApplyTheme(access_theme);
    }

    $(".icon-contraste").on("click", function (e) {
        if (access_theme == "light") {
            access_theme = "dark";
        } else {
            access_theme = "light";
        }
        accessApplyTheme(access_theme);
    }); 


    var cookiePoliticas = localStorage.getItem('cookiePoliticas');

    if (cookiePoliticas == null) {
        $(".box-cookies").attr("style", "display:block");

    }

    if ($("#hdnDefault").val() == "1" && $("div#Lbanner").length > 0) {
        $("div.alerta").attr('style', 'display:block');
        $("body").attr('style', 'max-height: 100vh;overflow-y: hidden;');
    }
  

    $("a.btn-fechar").on('click', function (e) {
        $("div.alerta").hide();
        $("body").attr('style', '');
    });

    
    if ($('.slide-items').text().trim() !== '') {
        $("div.storiesHome").attr('style', 'display:block');
    }

    $(".inside-footer a").each(function () {

        if ($(this).attr('href') === '#') {
            $(this).remove();
        }

    });

    if ($("#hdnDefault").val() != "1" ) {
        $(".footer-quadro").remove();
    }

    $('.imgBreadcrumb a').first().html('<img src="../images/icons/icon-home.png" alt="Home" />');

    var dadosFooter = $('div.footerDados').html();
    $('div.footer4').append(dadosFooter);
    $('div.footerDados').remove();

    $('ul.pages').each(function () {

        if ($(this).parent().parent().parent().find('a').attr('href') !== 'javascript:void(0);') {
            $(this).parent().parent().parent().find('a').removeAttr('aria-expanded data-bs-toggle data-bs-target aria-controls');
            $(this).parent().parent().remove();
        }

    });

    $('.nav-item .nav-link ').each(function () {

        if ($(this).attr('href') !== 'javascript:void(0);') {
            $(this).removeAttr('data-mdb-toggle aria-expanded');
            $(this).parent().find('ul').remove();
        }

    });

});


// Ativar o focus personalizado dos inputs

function activeInputsFocus(){
    const inputs = document.querySelectorAll('.div-input input, .div-input select, .div-input textarea');

    inputs.forEach(input => {
      input.addEventListener('focus', (e) => {
        input.parentNode.classList.add("focus")
      })
      input.addEventListener('blur', (e) => {
        if(input.value == ""){
          input.parentNode.classList.remove("focus")
        }
      })
    })
}

function preencheAlertasFooter() {
    var email = $("input.alertaemailFooter").val();
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (filter.test(email)) {
        var emailContato = 'email=' + $('input.alertaemailFooter').val();

        window.location = window.location.origin + '/Alertas.aspx?IdCanal=uJF0Fz8faMgZGq6ziWQo9g==&' + emailContato + '&linguagem=pt#scrollNome'

    } else
        if (!filter.test(email)) {
            alert('E-mail Inválido!');

        }
}

function preencheAlertas() {
    var email = $("input.alertaemail").val();
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (filter.test(email)) {
        var emailContato = 'email=' + $('input.alertaemail').val();

        window.location = window.location.origin + '/Alertas.aspx?IdCanal=uJF0Fz8faMgZGq6ziWQo9g==&' + emailContato + '&linguagem=pt#scrollNome'

    } else
        if (!filter.test(email)) {
            alert('E-mail Inválido!');

        }
}
  


// Contraste
function accessApplyTheme(theme) {
    localStorage.setItem("access_theme", theme);

    if (theme == "dark") {
        $("body").attr("data-theme", "dark");
    } else {
        $("body").attr("data-theme", "light");
    }
}

function accessApplyFont(size) {
    localStorage.setItem('access_font_size', size)
    var size_px = 100 + Number(size) + '% !important';
    $('html').attr('style', 'font-size:' + size_px);
}

function setCookie() {
    localStorage.setItem('cookiePoliticas', "pnb");
    $(".box-cookies").attr("style", "display:none");
}

function Buscar() {
    var buscada = $(".inputBusca").val().replace(/"/g, "");
    window.location = "ListaBusca.aspx?busca=" + buscada;
}

function BuscarMobile() {
    var buscada = $(".inputBuscaMobile").val().replace(/"/g, "");
    window.location = "ListaBusca.aspx?busca=" + buscada;
}

function irParaTopo() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}

function retornoCallback(arg) {
    var args = arg.split(';');

    switch (args[0]) {
        case "impressao": {
            executaImpressao(args[1]);
            break;
        }
        case "buscarShow": {
            alert(args[1]);
            break;
        }
        case "email": {
            if (args[1] == "success") {
                alert(args[2]);
                fechaBoxEmail();
            } else
                alert(args[2]);
            break;
        }
        case "novaDescricaoTriResponse":
            exibirNovaDescricao(args[1], args[2]);
            break;
        case "lembreteAgenda":
            var alertagenda = $('input[id$=MsgLembreteAgenda]').val();
            limparCamposAgenda();
            alert(alertagenda);
            break;
        case "paginarResponse":
            efetuarPaginacaoResponse(args[1], args[2]);
            break;
        case "alerta": {
            var alertari = $('input[id$=MsgSucessoRi]').val();
            alert(alertari);
            fechaBoxAlerta();
            limpaModal();
            break;
        }
        case "alertaContatoExiste": {
            var mensagem = unescape(args[1]);
            eval(mensagem);
            fechaBoxAlerta();
            limpaModal();
            $('body').removeClass();
            break;
        }
        case "EventosAnteriores": {
            carregarEventosAnteriores(args);
            break;
        }
        case "EventosProximos": {
            carregarEventosProximos(args);
            break;
        }
        case "paginarcalendarioresponsive": {
            montaEventosCalendario(args[1]);
            mostraEventosDoDiaSelecionadoPosMudancaMes();
            break;
        }
        case "captchaIvalido": {
            var textoAlerta = $('input[id$=MsgErroCaptcha]').val();
            alert(textoAlerta);
            break;
        }
        default:
            break;
    }
}

function erroCallback(err) {
    alert("erro:" + err);
}

