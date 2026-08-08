(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"xrPanelsEnabled":true,"scripts":{"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"clone":TDV.Tour.Script.clone,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumePlayers":TDV.Tour.Script.resumePlayers,"downloadFile":TDV.Tour.Script.downloadFile,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"openLink":TDV.Tour.Script.openLink,"isPanorama":TDV.Tour.Script.isPanorama,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"unloadViewer":TDV.Tour.Script.unloadViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getKey":TDV.Tour.Script.getKey,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setValue":TDV.Tour.Script.setValue,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPixels":TDV.Tour.Script.getPixels,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"existsKey":TDV.Tour.Script.existsKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"disableVR":TDV.Tour.Script.disableVR,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"init":TDV.Tour.Script.init,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlays":TDV.Tour.Script.getOverlays,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showWindowBase":TDV.Tour.Script.showWindowBase,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"createTween":TDV.Tour.Script.createTween,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizStart":TDV.Tour.Script.quizStart,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"translate":TDV.Tour.Script.translate,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"enableVR":TDV.Tour.Script.enableVR},"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"id":"rootPlayer","start":"this.init()","data":{"defaultLocale":"es","history":{},"locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"name":"Player1450","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false}},"backgroundColor":["#FFFFFF"],"hash": "a6bbaa1e0383e30b50e093ddb949826dbbe66e5b2aa5ea534a19978ce7d5d5ed", "definitions": [{"initialSequence":"this.sequence_EA6B74E7_E1BE_B27C_41D5_301718645A05","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_camera","enterPointingToHorizon":true},{"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","progressBottom":10,"playbackBarBottom":5,"progressBarBorderSize":0,"progressBarBorderRadius":2,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowVerticalLength":0,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","progressLeft":"33%","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","class":"ViewerArea","vrThumbstickRotationStep":20,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipPaddingRight":6,"toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBorderSize":0,"id":"MainViewer","progressBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","toolTipShadowColor":"#333138","progressRight":"33%","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":6,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial","playbackBarBackgroundOpacity":1,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"minHeight":50,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadHeight":15,"minWidth":100,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","width":"100%","playbackBarHeadBorderSize":0,"propagateClick":false,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"subtitlesTextShadowVerticalLength":1,"height":"100%","subtitlesBottom":50,"firstTransitionDuration":0,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"]},{"initialSequence":"this.sequence_EA1BDCF3_E1BF_D255_41D8_9A7EFCB87510","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_camera","enterPointingToHorizon":true},{"hfov":360,"frames":[{"thumbnailUrl":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":8,"url":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_0/{face}/0/{row}_{column}.webp","colCount":48,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","width":24576},{"rowCount":4,"url":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_0/{face}/1/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","width":12288},{"rowCount":2,"url":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_0/{face}/2/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","width":6144},{"rowCount":1,"url":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_0/{face}/3/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"thumbnailUrl":"media/panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_t.webp","id":"panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F","adjacentPanoramas":[{"data":{"overlayID":"overlay_F258F25E_E1CA_D64F_41E6_E7AD4E000961"},"distance":100,"select":"this.overlay_F258F25E_E1CA_D64F_41E6_E7AD4E000961.get('areas').forEach(function(a){ a.trigger('click') })","yaw":0,"class":"AdjacentPanorama","panorama":"this.panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390","backwardYaw":107.71}],"class":"Panorama","data":{"label":"IMG_20260805_110025_00_003"},"hfovMin":"150%","overlays":["this.overlay_F258F25E_E1CA_D64F_41E6_E7AD4E000961"],"hfovMax":130,"label":trans('panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F.label')},{"hfov":360,"frames":[{"thumbnailUrl":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":8,"url":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_0/{face}/0/{row}_{column}.webp","colCount":48,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","width":24576},{"rowCount":4,"url":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_0/{face}/1/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","width":12288},{"rowCount":2,"url":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_0/{face}/2/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","width":6144},{"rowCount":1,"url":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_0/{face}/3/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"width":3072}]}}],"vfov":180,"thumbnailUrl":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_t.webp","id":"panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390","adjacentPanoramas":[{"data":{"overlayID":"overlay_F251D25C_E1CA_D653_41E3_27C9BF6B37FE"},"distance":0.49,"select":"this.overlay_F251D25C_E1CA_D653_41E3_27C9BF6B37FE.get('areas').forEach(function(a){ a.trigger('click') })","yaw":107.71,"class":"AdjacentPanorama","panorama":"this.panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F","backwardYaw":0}],"class":"Panorama","data":{"label":"DJI_20260805105158_0011_D"},"overlays":["this.overlay_EE788D8E_E1DA_52CC_41CF_DB54AA5619B9","this.overlay_F1134FDF_E1DE_6E4C_41E2_28BD30899E20","this.overlay_F356110B_E1CB_B3B4_41D7_53B81C04BEB6","this.overlay_F251D25C_E1CA_D653_41E3_27C9BF6B37FE"],"hfovMax":130,"label":trans('panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390.label')},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","mouseControlMode":"drag_rotation"},{"id":"mainPlayList","items":[{"camera":"this.panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_camera","media":"this.panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F_camera","media":"this.panorama_ECC08709_E1B9_FFB5_4191_A1CA2B69A43F","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"class":"PanoramaCameraSequence","id":"sequence_EA6B74E7_E1BE_B27C_41D5_301718645A05","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"class":"PanoramaCameraSequence","id":"sequence_EA1BDCF3_E1BF_D255_41D8_9A7EFCB87510","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"data":{"label":"IrADji_20260805105158_0011_d","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_F5A5B411_E1FB_D1D5_41DB_B5D86F212020"],"class":"HotspotPanoramaOverlay","items":[{"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"IrADji_20260805105158_0011_d"},"vfov":9.45,"image":"this.AnimatedImageResource_ED0AEBE5_E236_6242_41B8_0A0A83C94682"}],"enabledInVR":true,"maps":[],"useHandCursor":true,"id":"overlay_F258F25E_E1CA_D64F_41E6_E7AD4E000961"},{"enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_EE293DBC_E1DA_52CC_41C3_1BEE05BB5C48"],"class":"HotspotPanoramaOverlay","items":[{"pitch":-72.23,"distance":50,"yaw":80.04,"class":"HotspotPanoramaOverlayImage","hfov":14.78,"data":{"label":"Pol\u00edgono"},"image":{"levels":[{"url":"media/panorama_F19D7797_E1BE_7EDC_41EA_2078D25E5390_HS_25pat4ea.webp","class":"ImageResourceLevel","height":432,"width":495}],"class":"ImageResource"},"vfov":12.93}],"data":{"label":"Polígono"},"maps":[],"useHandCursor":true,"id":"overlay_EE788D8E_E1DA_52CC_41CF_DB54AA5619B9"},{"enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_F0F3C05F_E1DE_724C_415A_9115F82856A2"],"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_F1102FDB_E1DE_6E54_41E6_1A60B4628142"],"data":{"label":"Texto"},"maps":[],"useHandCursor":true,"id":"overlay_F1134FDF_E1DE_6E4C_41E2_28BD30899E20"},{"enabledInVR":true,"areas":["this.HotspotPanoramaOverlayArea_F3566112_E1CB_B3D4_41D6_B92EB6B1DA8B"],"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_F3569107_E1CB_B3BC_41E7_271ECBED9970"],"data":{"label":"Texto"},"maps":[],"useHandCursor":true,"id":"overlay_F356110B_E1CB_B3B4_41D7_53B81C04BEB6"},{"data":{"label":"IrAImg_20260805_110025_00_003","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_F2239299_E1CA_D6D5_41EA_51A89ECA9B8A"],"class":"HotspotPanoramaOverlay","items":[{"pitch":-73.98,"distance":50,"hfov":2.21,"class":"HotspotPanoramaOverlayImage","vfov":5.9,"yaw":107.71,"data":{"label":"IrAImg_20260805_110025_00_003"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_ED0AABE4_E236_6242_41DF_F59BCBC34E1C","opacity":0.7}],"enabledInVR":true,"maps":[],"useHandCursor":true,"id":"overlay_F251D25C_E1CA_D653_41E3_27C9BF6B37FE"},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F5A5B411_E1FB_D1D5_41DB_B5D86F212020"},{"colCount":3,"frameDuration":62,"finalFrame":"first","class":"AnimatedImageResource","levels":[{"url":"media/res_F4FE00FA_E1FB_F257_41C2_8A832C80EDF8_0.webp","class":"ImageResourceLevel","height":270,"width":300}],"rowCount":3,"id":"AnimatedImageResource_ED0AEBE5_E236_6242_41B8_0A0A83C94682","frameCount":9},{"id":"HotspotPanoramaOverlayArea_EE293DBC_E1DA_52CC_41C3_1BEE05BB5C48","displayTooltipInTouchScreens":true,"mapColor":"image","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_F0F3C05F_E1DE_724C_415A_9115F82856A2","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"distance":50,"hfov":10.92,"vfov":2.3,"id":"HotspotPanoramaOverlayTextImage_F1102FDB_E1DE_6E54_41E6_1A60B4628142","image":{"levels":["this.imlevel_F354480E_E1C6_D1CC_41E4_5817151EFD49"],"class":"ImageResource"},"pitch":-70.45,"yaw":80.95,"class":"HotspotPanoramaOverlayImage","data":{"label":"Texto"},"rotationX":25.3},{"id":"HotspotPanoramaOverlayArea_F3566112_E1CB_B3D4_41D6_B92EB6B1DA8B","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"distance":50,"hfov":30.22,"vfov":8.22,"id":"HotspotPanoramaOverlayTextImage_F3569107_E1CB_B3BC_41E7_271ECBED9970","image":{"levels":["this.imlevel_F4F7B4A3_E1FB_F2F5_41B8_991CB892376F"],"class":"ImageResource"},"pitch":8.41,"yaw":21.91,"class":"HotspotPanoramaOverlayImage","data":{"label":"Texto"}},{"displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_F2239299_E1CA_D6D5_41EA_51A89ECA9B8A"},{"colCount":3,"frameDuration":62,"finalFrame":"first","class":"AnimatedImageResource","levels":[{"url":"media/res_F4FE00FA_E1FB_F257_41C2_8A832C80EDF8_0.webp","class":"ImageResourceLevel","height":270,"width":300}],"rowCount":3,"id":"AnimatedImageResource_ED0AABE4_E236_6242_41DF_F59BCBC34E1C","frameCount":9},{"height":153.15,"url":trans('imlevel_F354480E_E1C6_D1CC_41E4_5817151EFD49.url'),"class":"ImageResourceLevel","id":"imlevel_F354480E_E1C6_D1CC_41E4_5817151EFD49","width":728.31},{"height":536.21,"url":trans('imlevel_F4F7B4A3_E1FB_F2F5_41B8_991CB892376F.url'),"class":"ImageResourceLevel","id":"imlevel_F4F7B4A3_E1FB_F2F5_41B8_991CB892376F","width":2014.59}],"scrollBarColor":"#000000","layout":"absolute","gap":10,"minHeight":0,"minWidth":0,"propagateClick":false,"scrollBarMargin":2,"class":"Player","height":"100%","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.3, Sat Aug 8 2026