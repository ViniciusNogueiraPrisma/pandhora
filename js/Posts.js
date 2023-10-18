$(document).ready(function () {
    sleep(1000);
    $('div[class*=loader]').attr('style', 'display:none;');
    $('div[id*=totalContent]').attr('style', 'display:block;');

    $("a[id*=linkListaTituloChamada]").each(function () {
        var link = $(this).attr('href');
        $(this).parents('.ajusteLista').find('a.recebeLink').attr('href', link);

        if (link.indexOf("Download") == -1) {
            $(this).parents('.ajusteLista').find('.iconeDownload').remove();
            $(this).parents('.ajusteLista').find('.iconePDF').attr('src', './images/icons/icon-link.svg');
        }

        var textoLink = $(this).text();

        $(this).parents('.ajusteLista').find('.recebeTexto').text(textoLink);

        $(this).remove();

    });

    $('a.disabled').remove();
    $('a#lnkAnterior').remove();
    $('a#lnkProximo').remove();




});


function onSuccess(result) {
    //alert(result);
    $('div.blogsPots').empty();
    var i;
    var text = "";
    for (i = 0; i < result.d.length; i++) {
        if (!(typeof result.d[i].Titulo === "undefined")) {
            if ($(".hidLinguagem").val() == "ptg") {

                var corpoHtml = '<div class="swiper-slide slide-blog-interna ajusteLista"> <div class="cards-blog"> <div class="cards-blog-img"> <img src="#trocaImagem" alt="Imagem Pandhora" /> </div> <div class="cards-blog-text"> <h1 class="recebeTexto"> #trocaTitulo </h1> <span > #trocaSubtitulo </span> <div class="link-blog"> <a href="#trocaLink" class="recebeLink">Leia mais</a> </div> </div> </div></div>';

                corpoHtml = corpoHtml.replaceAll('#trocaTitulo', result.d[i].Titulo);
                corpoHtml = corpoHtml.replaceAll('#trocaLink', result.d[i].Link);
                corpoHtml = corpoHtml.replaceAll('#trocaImagem', result.d[i].Imagem);
                corpoHtml = corpoHtml.replaceAll('#trocaSubtitulo', result.d[i].SubTitulo);


                text += corpoHtml;
            } else {
                var corpoHtml = '<div class="swiper-slide slide-blog-interna ajusteLista"> <div class="cards-blog"> <div class="cards-blog-img"> <img src="#trocaImagem" alt="Imagem Pandhora" /> </div> <div class="cards-blog-text"> <h1 class="recebeTexto"> #trocaTitulo </h1> <span > #trocaSubtitulo </span> <div class="link-blog"> <a href="#trocaLink" class="recebeLink">Read more</a> </div> </div> </div></div>';

                corpoHtml = corpoHtml.replaceAll('#trocaTitulo', result.d[i].Titulo);
                corpoHtml = corpoHtml.replaceAll('#trocaLink', result.d[i].Link);
                corpoHtml = corpoHtml.replaceAll('#trocaImagem', result.d[i].Imagem);
                corpoHtml = corpoHtml.replaceAll('#trocaSubtitulo', result.d[i].SubTitulo);



                text += corpoHtml;
            }
        }

    }

    $('div.blogsPots').append(text);


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

    $('.ano-item').each(function () {
        $(this).removeClass('active');
        var url = $('.date').first().text().trim();
        var anoUrl = url.split('/')[2];
        var anoTab = $(this).text();

        if (anoTab.indexOf(anoUrl) != -1) {

            $(this).addClass('active');
        }
    });

    $('div[class*=loader]').attr('style', 'display:none;');
    $('div[id*=totalContent]').attr('style', 'display:block;');



}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

$(window).on("load", function () {
    $('.ano-item').each(function () {
        $(this).removeClass('active');
        var url = $('.date').first().text().trim();
        var anoUrl = url.split('/')[2];
        var anoTab = $(this).text();

        if (anoTab.indexOf(anoUrl) != -1) {

            $(this).addClass('active');
        }
    });
});


function efetuarFiltroAno(ano) {

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();

    $('div[id*=totalContent]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');

    $.ajax({
        type: "POST",
        url: "filtroPost.asmx/Filtro",
        data: JSON.stringify({
            "ano": ano,
            "idCanal": idCanal,
            "linguagem": linguagem
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: onSuccess,
        error: function (result) {
        }
    });


    //PageMethods.RefreshContent(ano, idCanal, linguagem, onSuccess, onError);

}

function onError(result) {
    alert(result._message);
}

function getIdCanal() {
    var strReturn = "";
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}




