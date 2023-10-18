
function imprimirClick() {
    imprimir($('.titShow').text(), $('.titShow').text(), $('.txtShow').html(), $('.titShow').text());
}

function AbrirDiv(id) {
    if (document.getElementById(id).style['display'] == 'block') {
        document.getElementById(id).style['display'] = 'none';
        $('a.[id=a' + id + ']').removeAttr('class', 'selected');
    } else {
        document.getElementById(id).style['display'] = 'block';
        $('a.[id=a' + id + ']').attr('class', 'selected');
    }
}

$(document).ready(function () {

    $('.txt-show').addClass('list-show');

    $(document).ready(function () {
        $('a[id*=aesconder]').each(function (index) {
            var id = (this.id).toString().replace('aesconder', 'esconder');
            var js = "AbrirDiv('" + id + "');";
            var newclick = new Function(js);
            $(this).attr('onclick', '').click(newclick);
        });
        $('div[id*=esconder]').css('display', 'none');
    });
    $('div[id*=esconder]').css('display', 'none');

    var idCanal = $('input[id*=hdCanal]').val();

    if (idCanal.indexOf('q7/kVl JX0Tk7f6RXzlziw==') != -1 || idCanal.indexOf('IvlQzv/qWpm0zubi5a0Edg==') != -1 || idCanal.indexOf('TLZIeazMPrXCUX0aZ2K5eA==') != -1 || idCanal.indexOf('N8GolwIQBCoFAmJzxHMakA==') != -1 || idCanal.indexOf('/ZN9YLCU Qqk2fnMALcd/Q==') != -1) {
        $('.bannerProjeto').remove();
        $('.pagination-internas').insertBefore('.container-fundos-infos');
        $('.pagination-internas').removeClass('container-sm').addClass('container');

        var linkGrafico = $(".linkGrafico").text().trim();

        if (linkGrafico != "") {
            $('.iframeGrafico').attr('src', linkGrafico);
        }
    }

    if (idCanal.indexOf('e6q1Cz/pLsz4HWzezceB/Q==') != -1) {
        $('.acessibillity-bar').remove();
        $('.headerFixoMenu').remove();
        $('.searchbox').remove();
        $('.mobile-menu-div').remove();
        $('.bannerProjeto').remove();
        $('.footer-home').remove();
        $('.pagination-internas').remove();
    }

});

