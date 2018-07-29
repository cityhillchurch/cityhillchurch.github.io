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
                "date": "Jul 22, 2018",
                "passage": "Mark 10:13-16 'Kingdom Talk'",
                "speaker": "Pastor Robin Cho",
                "length": "31:07",
                "file": "Mark+1013-16"
            }, {
                "date": "Jul 9, 2018",
                "passage": "Mark 9:42-50 'Dealing With Sin'",
                "speaker": "Pastor Robin Cho",
                "length": "42:59",
                "file": "Mark+9_42-50"
            }, {
                "date": "Jul 1, 2018",
                "passage": "Mark 9:38-41 'Spiritual Snobbery'",
                "speaker": "Pastor Robin Cho",
                "length": "33:52",
                "file": "Mark+9_38-41"
            }, {
                "date": "Jun 24, 2018",
                "passage": "Acts 17:1-15 'The Persisting Power of the Word'",
                "speaker": "Pastor Bing Nieh (Guest Preacher)",
                "length": "45:23",
                "file": "Pastor+Bing"
            }, {
                "date": "Jun 10, 2018",
                "passage": "Mark 9:30-37 'Last Place'",
                "speaker": "Pastor Robin Cho",
                "length": "40:15",
                "file": "Mark+9_30-37"
            }, {
                "date": "Jun 3, 2018",
                "passage": "Mark 9:14-29 'Help My Unbelief!'",
                "speaker": "Pastor Robin Cho",
                "length": "37:49",
                "file": "Mark+9_14-29"
            }, {
                "date": "May 27, 2018",
                "passage": "Acts 4:21-31 'Bold Prayers'",
                "speaker": "Pastor Oscar Leiva (Guest Preacher)",
                "length": "28:12",
                "file": "Acts+4_23-31"
            }, {
                "date": "May 20, 2018",
                "passage": "Mark 9:1-13 'The Transfiguration'",
                "speaker": "Pastor Robin Cho",
                "length": "43:44",
                "file": "Mark+9_1-13"
            }, {
                "date": "May 13, 2018",
                "passage": "Mark 8:35-38 'Saving Your Life'",
                "speaker": "Pastor Robin Cho",
                "length": "45:39",
                "file": "Mark+8_35-38"
            }, {
                "date": "May 6, 2018",
                "passage": "Mark 8:34 'The Conditions of Discipleship'",
                "speaker": "Pastor Robin Cho",
                "length": "47:44",
                "file": "Mark+8_34"
            }, {
                "date": "Apr 29, 2018",
                "passage": "Mark 8:31-33 'The Suffering Messiah'",
                "speaker": "Pastor Robin Cho",
                "length": "36:32",
                "file": "Mark+8_31-33"
            }, {
                "date": "Apr 22, 2018",
                "passage": "Mark 8:22-30 'You are the Christ'",
                "speaker": "Pastor Robin Cho",
                "length": "40:44",
                "file": "Mark+8_22-30"
            }, {
                "date": "Apr 15, 2018",
                "passage": "Mark 8:11-21 'Spiritual Amnesia'",
                "speaker": "Pastor Robin Cho",
                "length": "46:18",
                "file": "Mark+8_11-21"
            }, {
                "date": "Apr 8, 2018",
                "passage": "Mark 8:1-10 'Christ's Compassion For You'",
                "speaker": "Pastor Robin Cho",
                "length": "37:34",
                "file": "Mark+8_1-10"
            }, {
                "date": "Mar 25, 2018",
                "passage": "Mark 7:31-37 'The Deaf and the Mute'",
                "speaker": "Pastor Robin Cho",
                "length": "42:58",
                "file": "Mark7+31-37"
            }, {
                "date": "Mar 18, 2018",
                "passage": "Mark 7:24-30 'Persistent Faith'",
                "speaker": "Pastor Robin Cho",
                "length": "40:33",
                "file": "Mark+7_24-30"
            }, {
                "date": "Mar 11, 2018",
                "passage": "Mark 7:14-23 'The Evil Within'",
                "speaker": "Pastor Robin Cho",
                "length": "54:53",
                "file": "Mark+714-23"
            }, {
                "date": "Mar 4, 2018",
                "passage": "Mark 6:53-7:13 'The Charge of Hypocrisy'",
                "speaker": "Pastor Robin Cho",
                "length": "44:10",
                "file": "Mark+6_53-7_13"
            }, {
                "date": "Feb 25, 2018",
                "passage": "Mark 6:45-52 'Walking On Water'",
                "speaker": "Pastor Robin Cho",
                "length": "48:15",
                "file": "Mark+6_45-52"
            }, {
                "date": "Feb 18, 2018",
                "passage": "Mark 6:30-44 'Feeding The Sheep'",
                "speaker": "Pastor Robin Cho",
                "length": "42:12",
                "file": "Mark6+30-44"
            }, {
                "date": "Feb 11, 2018",
                "passage": "Mark 6:14-29 'The Foreshadow'",
                "speaker": "Pastor Robin Cho",
                "length": "44:26",
                "file": "Mark+6_14-29"
            }, {
                "date": "Jan 28, 2018",
                "passage": "Mark 6:7-13 'Some Light Packing'",
                "speaker": "Pastor Robin Cho",
                "length": "44:12",
                "file": "Mark+6_7-13"
            }, {
                "date": "Jan 21, 2018",
                "passage": "Mark 6:1-6 'Rejecting Jesus'",
                "speaker": "Pastor Robin Cho",
                "length": "38:44",
                "file": "Mark+6_1-6"
            }, {
                "date": "Jan 14, 2018",
                "passage": "Mark 5:21-34 'From Death to Life'",
                "speaker": "Pastor Robin Cho",
                "length": "33:19",
                "file": "Mark+5_35-43"
            }, {
                "date": "Jan 7, 2018",
                "passage": "Mark 5:21-34 'A True Peace'",
                "speaker": "Pastor Robin Cho",
                "length": "38:15",
                "file": "Mark+5_21-34"
            }, {
                "date": "Dec 31, 2017",
                "passage": "Mark 5:1-20 'An Unlikely Missionary'",
                "speaker": "Pastor Robin Cho",
                "length": "42:50",
                "file": "Mark+5_1-20+_An+Unlikely+Missionary_"
            }, {
                "date": "Dec 17, 2017",
                "passage": "Isaiah 8:22-9:1-7 'To Us a Child is Born'",
                "speaker": "Pastor Robin Cho",
                "length": "32:55",
                "file": "Isaiah+8_22-9_1-7"
            }, {
                "date": "Dec 10, 2017",
                "passage": "Mark 4:35-41 'Fear and Faith'",
                "speaker": "Pastor Robin Cho",
                "length": "32:46",
                "file": "Mark+4_35-41"
            }, {
                "date": "Dec 3, 2017",
                "passage": "Mark 4:26-34 'Kingdom Parables'",
                "speaker": "Pastor Robin Cho",
                "length": "49:23",
                "file": "Mark+426-34"
            }, {
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
