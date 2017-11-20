// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);

jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://s3.us-east-2.amazonaws.com/sermons.cityhillchurch.org/Sermons/',
            extension = '',
            tracks = [{
                "date": "Nov 19, 2017",
                "passage": "1 Thessalonians 5:16-18; Psalm 95:1-8 'Thanksgiving On Repeat'",
                "speaker": "Pastor Robin Cho",
                "length": "35:02",
                "file": "1+Thessalonians+5_16-18%3B+Psalm+95_1-8"
            }, {
                "date": "Nov 12, 2017",
                "passage": "John 11:17-40 'The Five Solas: Soli Deo Gloria, Glory To God Alone'",
                "speaker": "Pastor Pastor Sam Kang (Guest Preacher)",
                "length": "56:03",
                "file": "A+Glory+Witnessed"
            }, {
                "date": "Nov 5, 2017",
                "passage": "Hebrews 10:19-25 'The Five Solas: Solus Christus, Christ Alone'",
                "speaker": "Pastor Robin Cho",
                "length": "38:46",
                "file": "Solus+Christus+Hebrews+10_19-25"
            }, {
                "date": "Oct 29, 2017",
                "passage": "Roman 4:1-8 'The Five Solas: Sola Fide, Faith Alone'",
                "speaker": "Pastor Robin Cho",
                "length": "48:04",
                "file": "Romans+4_1-8"
            }, {
                "date": "Oct 22, 2017",
                "passage": "2 Timothy 3:16-17 'The Five Solas: Sola Scriptura, Scripture Alone'",
                "speaker": "Pastor Steven Jon (Guest Preacher)",
                "length": "31:19",
                "file": "New+Recording+4"
            }, {
                "date": "Oct 15, 2017",
                "passage": "Ephesians 2:1-10 'The Five Solas: Sola Gratia, By Grace Alone'",
                "speaker": "Pastor Robin Cho",
                "length": "52:31",
                "file": "Ephesians+21-10"
            }, {
                "date": "Oct 8, 2017",
                "passage": "Mark 4:10-13; 21-25 'The Purpose of Parables'",
                "speaker": "Pastor Robin Cho",
                "length": "51:08",
                "file": "Mark+4_10-13%3B+21-25"
            }, {
                "date": "Oct 1, 2017",
                "passage": "Mark 4:1-20 'The Parable of the Soil'",
                "speaker": "Pastor Robin Cho",
                "length": "48:41",
                "file": "Mark+4_1-20"
            }, {
                "date": "Sept 24, 2017",
                "passage": "Mark 3:31-35 'God's Family'",
                "speaker": "Pastor Robin Cho",
                "length": "39:33",
                "file": "Mark+3_31-35"
            }, {
                "date": "Sept 10, 2017",
                "passage": "Mark 3:20-30 'The Stronger One'",
                "speaker": "Pastor Robin Cho",
                "length": "42:49",
                "file": "Mark+3_20-30"
            }, {
                "date": "Sept 3, 2017",
                "passage": "Ephesians 1:3-14 'Union With Christ'",
                "speaker": "Pastor Stephen Jon (Guest Preacher)",
                "length": "24:33",
                "file": "Ephesians+13-14"
            }, {
                "date": "Aug 27, 2017",
                "passage": "Jeremiah 12:7-17 'Hope For the Nations'",
                "speaker": "Pastor Robin Cho",
                "length": "49:09",
                "file": "Jeremiah+12_7-17"
            }, {
                "date": "Aug 20, 2017",
                "passage": "Jeremiah 12:1-6 'What's Going On?'",
                "speaker": "Pastor Robin Cho",
                "length": "44:30",
                "file": "Jeremiah+12_1-6"
            }, {
                "date": "Aug 13, 2017",
                "passage": "2 Corinthians 1:3-11 'The God of all Comfort'",
                "speaker": "Pastor Robin Cho",
                "length": "47:22",
                "file": "2+Corinthians+1_3-11"
            }, {
                "date": "Aug 6, 2017",
                "passage": "Psalm 119:9-16 'Storing Up'",
                "speaker": "Pastor Robin Cho",
                "length": "51:47",
                "file": "Psalm+119_9-16"
            }, {
                "date": "July 30, 2017",
                "passage": "Mark 3:7-19 'Jesus and His Apostles'",
                "speaker": "Pastor Robin Cho",
                "length": "39:57",
                "file": "Mark+3_7-19"
            }, {
                "date": "July 16, 2017",
                "passage": "Mark 3:1-6 'Healing on the Sabbath'",
                "speaker": "Pastor Robin Cho",
                "length": "41:28",
                "file": "Mark+3_1-6"
            }, {
                "date": "July 9, 2017",
                "passage": "Mark 2:23-28 'Lord of the Sabbath'",
                "speaker": "Pastor Robin Cho",
                "length": "41:45",
                "file": "Mark+2_23-28"
            }, {
                "date": "July 2, 2017",
                "passage": "Mark 2:18-22 'True Religion'",
                "speaker": "Pastor Robin Cho",
                "length": "38:19",
                "file": "Mark+2_18-22"
            }, {
                "date": "June 25, 2017",
                "passage": "Mark 2:15-17 'An Invitation To Sinners'",
                "speaker": "Pastor Robin Cho",
                "length": "38:09",
                "file": "Mark+2_15-17"
            }, {
                "date": "May 28, 2017",
                "passage": "Mark 2:13-14 'His Will To Call You'",
                "speaker": "Pastor Robin Cho",
                "length": "30:35",
                "file": "Mark+2_13-14"
            }, {
                "date": "May 7, 2017",
                "passage": "Colossians 4:2-6 'Downtime'",
                "speaker": "Pastor David Lee (Guest Preacher)",
                "length": "41:14",
                "file": "Downtime"
            }, {
                "date": "April 30, 2017",
                "passage": "Matthew 5:43-48 'Why do we love our enemies'",
                "speaker": "Pastor David Lee (Guest Preacher)",
                "length": "33:23",
                "file": "Matthew+5_43-48"
            }, {
                "date": "April 23, 2017",
                "passage": "Mark 2:1-12 'The Forgiveness of Sin'",
                "speaker": "Pastor Robin Cho",
                "length": "33:23",
                "file": "Mark+2_1-12"
            }, {
                "date": "April 17, 2017",
                "passage": "Mark 1:40-45 'The Spritual Leper'",
                "speaker": "Pastor Robin Cho",
                "length": "30:24",
                "file": "Mark+1_40-45"
            }, {
                "date": "April 9, 2017",
                "passage": "Mark 1:35-39 'The Priority of Jesus'",
                "speaker": "Pastor Robin Cho",
                "length": "37:12",
                "file": "Mark+1_35-39"
            }, {
                "date": "April 2, 2017",
                "passage": "1 Peter 2:11-12 'As a People out of this World'",
                "speaker": "Pastor David Lee (Guest Preacher)",
                "length": "48:09",
                "file": "1+Peter+2_11-12"
            }, {
                "date": "Mar 26, 2017",
                "passage": "Galatians 6:1-10 'Bearing One Another's Burdens'",
                "speaker": "Pastor David Lee (Guest Preacher)",
                "length": "40:39",
                "file": "Galatians+6_1-10"
            },  {
                "date": "Mar 19, 2017",
                "passage": "Galatians 5:1-6 'Avoid the Sewage and Enjoy the Spring'",
                "speaker": "Pastor Sam Kang (Guest Preacher)",
                "length": "34:58",
                "file": "Galatians+5_1-6"
            }, {
                "date": "Mar 12, 2017",
                "passage": "Mark 1:29-34 'The Healer'",
                "speaker": "Pastor Robin Cho",
                "length": "37:22",
                "file": "March+1_29-34"
            }, {
                "date": "Mar 5, 2017",
                "passage": "Mark 1:21-28 'The Holy One Of God'",
                "speaker": "Pastor Robin Cho",
                "length": "27:03",
                "file": "The+Holy+One+of+God+-+Mark+1_21-28"
            }, {
                "date": "Feb 26, 2017",
                "passage": "Exodus 7:1-13 'Optimism is Sharing the Gospel to Hardened Hearts'",
                "speaker": "Pastor David Lee (Guest Preacher)",
                "length": "44:00",
                "file": "Exodus+7_1-13"
            }, {
                "date": "Feb 19, 2017",
                "passage": "Mark 1:16-20 'Fishers of Men'",
                "speaker": "Pastor Robin Cho",
                "length": "32:27",
                "file": "Mark+1_16-20"
            }, {
                "date": "Feb 12, 2017",
                "passage": "Mark 1:14-15 'What Jesus First Preached'",
                "speaker": "Paster Robin Cho",
                "length": "40:37",
                "file": "Mark+1_14-15"
            }, {
                "date": "Feb 5, 2017",
                "passage": "Daniel 6 'The Lion's Den'",
                "speaker": "Pastor Stephen Jon (Guest Preacher)",
                "length": "49:46",
                "file": "Daniel+6+Stephen+Jon"
            }, {
                "date": "Jan 29, 2017",
                "passage": "Mark 1:12-13 'Wilderness Qualified'",
                "speaker": "Pastor Robin Cho",
                "length": "37:54",
                "file": "Jan+29+Mark+1_12-13"
            }, {
                "date": "Jan 22, 2017",
                "passage": "Mark 1:9-11 'Vicarious Christ'",
                "speaker": "Pastor Robin Cho",
                "length": "34:21",
                "file": "Jan+22+Mark+1_9-11"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = key+1,
                    trackDate = value.date,
                    trackPassage = value.passage,
                    trackSpeaker = value.speaker,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' +
                trackNumber + '.</div><div class="plTitle">' +
                trackPassage + '<br>' + trackSpeaker + ' - ' + trackDate +
                '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].passage);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.m4a' : audio.canPlayType('audio/ogg') ? '.ogg' : audio.canPlayType('audio/mp4') ? '.mp4a' : '';
        loadTrack(index);
    }
});
