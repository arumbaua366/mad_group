$(document).ready(function() {
    //search Yelp 
        var $yelpActivityBtn = $('#new-yelp')
        var $yelpActivityForm = $('#yelp-form')
        var $business = $('#');
        var $search = $('#search');
        var $term = $('.term')

        $yelpActivityBtn.on('click', function() {
            $('#yelpActivityModal').modal()
            $searchRes.html('')
            $loc.val('')
            $term.val('')
        })
    
        yelpActivityForm.on('submit', (evt) => {
            console.log('clicked submit')
            console.log($('select[name=sort_by]'))
            evt.preventDefault()
            var formData = {
                "term": $('input[name=term]').val(),
                "location": $('input[name=location]').val(),
                "limit": 5,
            }
            console.log(formData)
            var term = formData.term
            var location = formData.location
            var limit = formData.limit
            $.ajax({
                url: `/search?term=${term}&location=${location}&limit=${limit}`,
                method: 'GET',
                data: JSON.stringify(formData),
                contentType: 'application/json'
            })
            .done((res) => {
                populate(res)
                console.log(res)
            })
        })

})
