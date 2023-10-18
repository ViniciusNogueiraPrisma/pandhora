function limpaFiltroPorAno() {
    window.location = "ListGroup.aspx?idCanal=" + getIdCanal();

}

function efetuarFiltroAno() {

    var ano = $('select[id*=ddlAnoFiltro] option:selected').val();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');

    $.ajax({
        type: "POST",
        url: "filtroListGroup.asmx/RefreshContent",
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
    var categoria = $('select[id*=ddlCategoriaFiltro] option:selected').val();
    var ano = new Date().getFullYear();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');

    $.ajax({
        type: "POST",
        url: "filtroListGroup.asmx/RefreshCategoria",
        data: JSON.stringify({
            "categoria": categoria,
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


    //PageMethods.RefreshCategoria(ano, categoria, idCanal, linguagem, onSuccess, onError);

}

function efetuarFiltroCategoriaAno() {

    var categoria = $('select[id*=ddlCategoriaFiltro] option:selected').val();
    var ano = $('select[id*=ddlAnoFiltro] option:selected').val();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');

    $.ajax({
        type: "POST",
        url: "filtroListGroup.asmx/RefreshCategoriaAno",
        data: JSON.stringify({
            "categoria": categoria,
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


    //PageMethods.RefreshCategoriaAno(ano, categoria, idCanal, linguagem, onSuccess, onError);
}

function getIdCanal() {
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}

function onError(result) {
    alert(result._message);
}

function onSuccess(result) {
    //alert(result);
    $('div#accCotacoesDocumentos').empty();


    var i;
    var c;
    var text = "";
    var conteudos = "";
    for (i = 0; i < result.d.length; i++) {
        if (!(typeof result.d[i].Titulo === "undefined")) {

            var corpoHtmlBase = '<div class="accordion-item aos-init aos-animate" data-aos="fade-up"><h2 class="accordion-header" id="heading-"><button class="accordionList accordion-button collapsed" type="button" data-bs-toggle="collapse"  aria-expanded="false"   >#TituloCanal</button></h2><div id="collapse-" class="accordion-collapse collapse"  data-bs-parent="#accCotacoesDocumentos"><div  class="accordion-body">  <ul class="list-downloads">#RecebeConteudos</ul>  </div></div></div>'
            corpoHtmlBase = corpoHtmlBase.replaceAll('#TituloCanal', result.d[i].Titulo);
            var corpoConteudos = "";

            for (c = 0; c < result.d[i].Materia.length; c++) {
                if (!(typeof result.d[i].Materia[c].Titulo === "undefined")) {
                    corpoConteudos = '<li data-aos="fade-up" class="ajusteLista aos-init aos-animate"> <div>  <a href="#trocaLink" class="recebeLink"  > <p class="recebeTexto"> #trocaTitulo </p> <div class="imgs-list-download"><img src="./images/icons/icon-download.svg" alt="Download" class="iconeDownload img-download "><img src="./images/icons/icon-pdf-simple.svg" alt="PDF" class="iconeDownload img-pdf"></div> </a> </div> </li>';
                    corpoConteudos = corpoConteudos.replaceAll('#trocaTitulo', result.d[i].Materia[c].Titulo);
                    corpoConteudos = corpoConteudos.replaceAll('#trocaLink', result.d[i].Materia[c].Link);
                    conteudos += corpoConteudos;
                }
            }
            corpoHtmlBase = corpoHtmlBase.replaceAll('#RecebeConteudos', conteudos);
            conteudos = "";

        }
        text += corpoHtmlBase;
    }

    $('div#accCotacoesDocumentos').append(text);


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


    var cont = 0;
    $('h2[id*=heading-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont);
        cont++;
    });

    var cont1 = 0;
    $('button[class*=accordionList]').each(function () {
        $(this).attr('data-bs-target', '#collapse-' + cont1);
        $(this).attr('aria-controls', 'collapse-' + cont1);
        cont1++;
    });

    var cont2 = 0;
    $('div[id*=collapse-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont2);
        $(this).attr('aria-labelledby', 'heading-' + cont2);
        cont2++;
    });


    $('button[class*=accordion-button]').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });


    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('.accordion-body').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });

    $('div[class*=loader]').attr('style', 'display:none;');
    $('section[id*=totalContent]').attr('style', 'display:block;');

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


$(document).ready(function () {

    sleep(1000);

    if ($('.list-downloads').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('.list-downloads').first().html('<li><p>Não existem matérias vinculadas a este canal.</p></li> ');
        } else {
            $('.list-downloads').first().html('<li><p>There are no matters related to this channel.</p></li> ');
        }
    }

    $('a[id*=linkListaTituloChamada]').each(function () {
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

    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    var cont = 0;
    $('h2[id*=heading-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont);
        cont++;
    });

    var cont1 = 0;
    $('button[class*=accordionList]').each(function () {
        $(this).attr('data-bs-target', '#collapse-' + cont1);
        $(this).attr('aria-controls', 'collapse-' + cont1);
        cont1++;
    });

    var cont2 = 0;
    $('div[id*=collapse-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont2);
        $(this).attr('aria-labelledby', 'heading-' + cont2);
        cont2++;
    });


    $('button[class*=accordion-button]').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });

    $('.accordion-body').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });

    $('div[class*=loader]').attr('style', 'display:none;');
    $('section[id*=totalContent]').attr('style', 'display:block;');
    
});