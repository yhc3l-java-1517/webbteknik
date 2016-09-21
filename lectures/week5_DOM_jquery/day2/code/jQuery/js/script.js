/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// Listen to the click event on the span with the id of button
// when you click on it retrieve the value from the input element and
// add it to the unordered list as a "li" element
$(function () {
	"use strict";
	var itemCount = 0;
	var addInfo = function () {
			var itemText = $("#itemName").val(),
				listItem = $("<li>"),
				removeButton = $("<span>remove</span>");
			itemText = $.trim(itemText);
			if (itemText !== "") {
				removeButton.addClass("remove");
				removeButton.click(function () {
					listItem.remove();
					itemCount = itemCount - 1;
					$("#itemName").show();
					$("#button").show();
					$("#itemName").focus();
				});
				listItem.text(itemText);
				listItem.append(removeButton);
				//<li>bread<span>remove</span></li>
				$("ul").append(listItem);
				itemCount = itemCount + 1;
				if (itemCount >= 5) {
					$("#itemName").hide();
					$("#button").hide();
				}
				$("#itemName").val("").focus();
			}
		};
	$("#button").click(addInfo);
});
