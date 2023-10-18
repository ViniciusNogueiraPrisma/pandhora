$(document).ready(function () {
    sleep(1000);

    $('div[class*=loader]').attr('style', 'display:none;');
    $('ul[id*=totalContent]').attr('style', 'display:block;');


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

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


function efetuarFiltroAno(ano) {
    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();

    $('ul[id*=totalContent]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');

    $.ajax({
        type: "POST",
        url: "filtroList.asmx/Filtro",
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

function efetuarFiltroCategoria() {

    window.location = "List.aspx?idCanal=" + getIdCanal();

}

function onSuccess(result) {
    //alert(result);
    $('ul.list-downloads').empty();
    var i;
    var text = "";
    for (i = 0; i < result.d.length; i++) {
        if (!(typeof result.d[i].Titulo === "undefined")) {

            var corpoHtml = '<li data-aos="fade-up" class="ajusteLista aos-init aos-animate"><div><a href="#trocaLink" class="recebeLink"><p class="recebeTexto">#trocaTitulo</p><div class="imgs-list-download"><img src="./images/icons/icon-download.svg" alt="Download" class="iconeDownload img-download "><img src="./images/icons/icon-pdf-simple.svg" alt="PDF" class="iconeDownload img-pdf"></div></a></div>	</li>';


            corpoHtml = corpoHtml.replaceAll('#trocaTitulo', result.d[i].Titulo);
            corpoHtml = corpoHtml.replaceAll('#trocaLink', result.d[i].Link);


            text += corpoHtml;

            
        }

    }

    $('ul.list-downloads').append(text);


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

    $('div[class*=loader]').attr('style', 'display:none;');
    $('ul[id*=totalContent]').attr('style', 'display:block;');

   



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




