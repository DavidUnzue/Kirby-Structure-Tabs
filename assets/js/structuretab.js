(function($) {
  $(document).ready(function() {

    if (app && typeof app == 'object') {
      $(app.modal).on('view:load', function() {
        // add this class to avoid issues with tabs outside from structure modal
        $(this).addClass('structuretab-wrapper');
        initModalModules();
      });
    }

    function initModalModules() {

    if ($('.structuretab-wrapper .modal-content input.structuretab').length)

      if ($(".structuretab-wrapper .modal-content").length){
          $('.structuretab-wrapper .modal-content').removeClass("modal-content-fixed");
          $(".structuretab-wrapper .modal-content .form").prepend($("<ul></ul>").addClass("tabs"));
      }

      else{
        $('.structuretab-wrapper .modal-content .input.structuretab').first().closest('.field-grid-item').prepend($("<ul></ul>").addClass("tabs"));
      }

      $('.structuretab-wrapper .modal-content label.structuretab').each(function() {
        var title = "<li class='tab' href='" + $(this).attr('name') + "'>" + $(this).closest(".field-grid-item").text().trim() + "</li>";
        $(".structuretab-wrapper .tabs").append(title);
      });

      $('.structuretab-wrapper .modal-content label.structuretab').each(function() {
        $(this).closest(".field-grid-item").addClass("group-title");
      });

      $('.structuretab-wrapper .modal-content .group-title').each(function() {
        $(this).nextUntil(".structuretab-wrapper .modal-content .group-title").andSelf().wrapAll('<div class="group" />');
      });

      $('.structuretab-wrapper .modal-content .group').each(function() {
        var id = $(this).find(".group-title label.structuretab").attr('name');
        $(this).attr('id', id);
      });

      if (!$('.structuretab-wrapper .modal-content .group.current').length) {
        $('.structuretab-wrapper .tabs li').first().addClass('current');
        var first_group = $('.structuretab-wrapper .group').first();
        first_group.addClass('current');
        first_group.find('input.structuretab').attr('checked', true);
      }

      $('.structuretab-wrapper .modal-content .tabs li').click(function() {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab_id = $(this).attr('href');
        $('.structuretab-wrapper .group').removeClass('current');
        $(".structuretab-wrapper #" + tab_id).addClass('current');
        $(".structuretab-wrapper #" + tab_id).find('input.structuretab').prop('checked', true);
        $(".structuretab-wrapper #" + tab_id).siblings().find('input.structuretab').prop('checked', false);
      });

    }


  });
}(jQuery));
