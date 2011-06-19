$ ->
  $('div.recipe_list').hide()
  $('.show_arrow').click ->
    $(this).parent().parent().find('div').toggle('slow')
