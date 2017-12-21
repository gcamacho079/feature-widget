var featureWidget = {
  init: function() {
    $(".tablinks").click(function() {
      $(".features__content").removeClass("features__content--active");
      let showThisContent = "#" + $(this).attr("data-toggler");
      $(showThisContent).addClass("features__content--active");
    });
  }
}

$(document).ready(featureWidget.init);
