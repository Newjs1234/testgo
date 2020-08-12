'use strict';

jQuery(document).ready(function($) {
    let form = $('.new-box');

    $.ajax({
        url: 'http://localhost:5000/posts',
        method: 'POST',
        success: function(data) {
            let box = '';
            for(let i = 1; i < data.length; i++) {
                box = box + '<li>' + data[i].title + ' ' + data[i].content + '</li>'; 
            }
        $('.new-title').html(box);
            
        }
    })
    
    $(form).submit(function(event) {
        event.preventDefault();

        let title = $('#title').val();
        let content = $('#content').val();
        
        $.ajax({
            url: 'http://localhost:5000/posts',
            method: 'POST',
            data: {
                title: title,
                content: content
            },
            success: function(data) {
                let box = '';
                for(let i = 1; i < data.length; i++) {
                    box = box + '<li>' + data[i].title + ' ' + data[i].content + '</li>'; 
                }
                $('.new-title').html(box);
            }
        })
    });
});