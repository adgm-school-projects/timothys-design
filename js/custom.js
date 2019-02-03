// JavaScript Document
$('iframe#myid').click(function() {
    $('iframe#' + current).removeClass('current');
    $('iframe#myid').addClass('current');
    var current = '#myid';
});