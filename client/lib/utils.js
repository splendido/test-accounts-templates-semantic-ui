
setActiveLinks = _.debounce(function() {
    $("ul.nav.navbar-nav li.active").removeClass('active');
    $("ul.nav.navbar-nav li a[href='" + location.pathname + "']").parent().addClass('active');
});