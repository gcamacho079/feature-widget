var featureWidget = {
  init: function() {
    $(".tablinks").click(function() {
      $(".features__content").removeClass("features__content--active");
      let showThisContent = "#" + $(this).attr("data-toggler");
      $(showThisContent).addClass("features__content--active");

      let showThisImage = $(this).attr("data-image");
      $(".features__left").css("background-image", "url('../images/" + showThisImage + "')");
      console.log(showThisImage);
    });
  }
}

$(document).ready(featureWidget.init);
