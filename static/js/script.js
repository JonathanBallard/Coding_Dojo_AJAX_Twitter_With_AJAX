

$(document).ready(function() {
    
    $('#emailCheck').keyup(function() {
        console.log("TEST TEST TEST")
        var data = $('#emailCheck').serialize()
        $.ajax({
            method: "POST",
            url: "/emailCheck",
            data: data
        })
        .done(function(res) {
            $('#emailMsg').html(res)
    
        })
    })
    
    $('#emailSearch').keyup(function() {
        console.log("TEST TEST TEST 2")
        var data = $('#emailSearch').serialize()
        $.ajax({
            method: "POST",
            url: "/usersearch",
            data: data
        })
        .done(function(res) {
            $('#searchresult').html(res)
    
        })
    })

    $('#tweetForm').submit(function() {
            console.log("TEST TEST TEST 3")
            var data = $('#tweetForm').serialize()
            $.ajax({
                method: "POST",
                url: '/tweets/create',
                data: data
            })
            .done(function(res) {
                $('#list_of_tweets').html(res)
                console.log(res + ' response')
            })
            return false;
        })







})
    
















