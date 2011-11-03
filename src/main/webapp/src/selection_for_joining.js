Rx.Observable.FromJQuery = function(jQueryObject, eventType, eventData) {
    return Rx.Observable.Create(function(observer) {
        var handler = function(eventObject) {
            observer.OnNext(eventObject);
        };
        jQueryObject.bind(eventType, eventData, handler);
        return function() {
            jQueryObject.unbind(eventType, handler);
        };
    });
};

var class_for_marking = 'selected_for_join';

function markCandidatesWithClass() {
    var candidates = Rx.Observable.FromJQuery($(".candidateitem"), "click")
                                  .Select(function (event) { return $(event.currentTarget) })
                                  .Where(function (x) { return x.hasClass(class_for_marking) === false })
                                  .Do(function (x) { x.addClass(class_for_marking) })
                                  .Publish()
    candidates.Zip(candidates.Skip(1), function(x) { return x })
              .Subscribe(function (x) { x.removeClass(class_for_marking) })
    candidates.Connect()
}