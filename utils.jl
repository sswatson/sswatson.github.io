
using UUIDs

function hfun_jcstart(args)
    id = string(UUIDs.uuid1());
    """
    <div class="centered" style="max-width: $(args[1])px;">
        <div 
            id="jxgbox-$(id)" 
            class="jxgbox centered" 
            style="width:$(args[2])%; height:0; 
                   padding-bottom: $(args[3])%"></div>    
    </div>
    <script type="text/javascript">
        const boardAttributes = {
            showCopyright: false,
            showNavigation: false,
            showFullscreen: false,
            zoom: {
            factorX: 1.25,  // horizontal zoom factor (multiplied to JXG.Board#zoomX)
            factorY: 1.25,  // vertical zoom factor (multiplied to JXG.Board#zoomY)
            wheel: true,     // allow zooming by mouse wheel or
                            // by pinch-to-toom gesture on touch devices
            needShift: true, // mouse wheel zooming needs pressing of the shift key
            min: 0.001,        // minimal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomOut
            max: 1000.0,      // maximal values of JXG.Board#zoomX and JXG.Board#zoomY, limits zoomIn
            pinchHorizontal: true, // Allow pinch-to-zoom to zoom only horizontal axis
            pinchVertical: true,   // Allow pinch-to-zoom to zoom only vertical axis
            pinchSensitivity: 7,   // Sensitivity (in degrees) for recognizing horizontal or vertical pinch-to-zoom gestures.
            },
            pan: {
            enabled: true,
            needTwoFingers: true,
            needShift: true
            },
            elements: {
            strokeColor: 'teal',
            strokeOpacity: 0.75,
            fillOpacity: 0.75,
            highlightFillOpacity: 0.75,
            },
            precision: {
            touch: 60,
            touchMax: 100,
            mouse: 20,
            pen: 8,
            epsilon: 0.0001,
            hasPoint: 4
            }
        };
        const board = JXG.JSXGraph.initBoard('jxgbox-$(id)', boardAttributes);
        board.jc.parse(`
    """
end

function hfun_jcend()
    "`)</script>"
end