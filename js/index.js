/*
 * @Author: Administrator
 * @Date:   2015-12-27 23:56:12
 * @Last Modified by:   Administrator
 * @Last Modified time: 2015-12-28 00:04:55
 */
$(function() {
  $('.log').on('click', function() {
    $('.pb_mask').slideDown(500);

  });
  $('.closeall').on('click', function() {
    $('.pb_mask').fadeOut(500);
  });
});
