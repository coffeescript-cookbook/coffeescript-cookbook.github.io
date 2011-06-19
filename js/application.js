$(function() {
  $('div.recipe_list').hide();
  return $('.show_arrow').click(function() {
    return $(this).parent().parent().find('div').toggle('slow');
  });
});