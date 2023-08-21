function limpaFiltroPorAno() {
    window.location = "ListGroup.aspx?idCanal=" + getIdCanal();
   
}

function efetuarFiltroPorAno() {
    window.location = "ListGroup.aspx?idCanal=" + getIdCanal() + "&ano=" + $('select[id*=ddlAnoFiltro] option:selected').val();
   
}

function getIdCanal() {
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}


$(document).ready(function () {

    if ($('.ul-list-documents').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('.ul-list-documents').first().html('<li><p>Não existem matérias vinculadas a este canal.</p></li> ');
        } else {
            $('.ul-list-documents').first().html('<li><p>There are no matters related to this channel.</p></li> ');
        }
    }

    $('a[id*=linkListaTituloChamada]').each(function () {
        var link = $(this).attr('href');
        $(this).parents('.ajusteLista').find('a#recebeLink').attr('href', link);

        if (link.indexOf("Download") == -1) {
            $(this).parents('.ajusteLista').find('.iconeDownload').remove();
            $(this).parents('.ajusteLista').find('.iconePDF').attr('src', './images/icons/icon-link.svg');
        }

        var textoLink = $(this).text();

        $(this).parents('.ajusteLista').find('.recebeTexto').text(textoLink);

        $(this).remove();
    });

    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').prepend(combo);

    $('a.disabled').remove();
    $('a#lnkAnterior').remove();
    $('a#lnkProximo').remove();

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
    
});