(function ($) {
    "use strict";
    var bdChat = {
        initialize: function () {
            this.perfectScrollbar();
            this.emojioneArea();
            this.scrollingBottom();
            this.fileUpload();
        },
        perfectScrollbar: function () {
            //Perfect scrollbar
            $('.bd-chatbot_body').each(function () {
                const ps = new PerfectScrollbar($(this)[0]);
            });
        },
        emojioneArea: function () {
            //Emojione area
            $("#demo1").emojioneArea({pickerPosition: "top",
                tonesStyle: "radio"
            });
        },
        scrollingBottom: function () {
            //chat content scrolling bottom
            var height = 0;
            $('.bd-chatbot_body .bd-messages').each(function (i, value) {
                height += parseInt($(this).height());
            });
            height += '';
            $('.bd-chatbot_body').animate({scrollTop: height});
        },
        fileUpload: function () {
            //Uppy
            const uppy = Uppy.Core({debug: true, autoProceed: false})
                    .use(Uppy.Dashboard, {trigger: '#uppyModalOpener'})
                    //        .use(Uppy.Webcam, {target: Uppy.Dashboard})
                    .use(Uppy.Tus, {endpoint: 'https://master.tus.io/files/'});

            uppy.on('success', (fileCount) => {
                console.log(`${fileCount} files uploaded`);
            });
        }
    };
    // Initialize
    $(document).ready(function () {
        "use strict";
        bdChat.initialize();
        $('[data-toggle="tooltip"]').tooltip({trigger: "hover"}); //Tooltip
         $('select').niceSelect(); //niceSelect
    });
}(jQuery));

//emotions rating
var emotionsArray = ['angry', 'disappointed', 'meh', 'happy', 'inLove'];
$('.SmileyRating').each(function () {
    //var name = $(this).data('name');
    $(this).emotionsRating({
        emotionSize: 22,
        //inputName: name,
        emotions: emotionsArray,
        disabled: false //set if the rating can be changed or not, default is false
    });
});
$('.emotion-style').on('mouseover', function (e) {
    value = $(this).data('index');
    // Remove the current .emotion-text, if exists
    $(this).closest('.emotion-container').find('.emotion-text').remove();
    // Add the emotion-text as a span
    $(this).closest('.emotion-container').append('<span class="emotion-text">' + emotionsArray[value] + '</span>');
});