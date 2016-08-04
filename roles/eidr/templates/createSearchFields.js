db.events.find({startDateISOVal:{$exists:true}}).forEach(function(document) {
    db.events.update(
        { "_id": document._id }, 
        { "$set": { "startDateISO": document.startDateISOVal } }
    );
})
db.events.find({locations:{$exists:true}}).forEach(function(document) {
    db.events.update(
        { "_id": document._id },
        { "$set": {
            "locationNation": document.locations.map(function(location){
                 return location.locationNationVal;
             }).filter(function(name){return name && name !== "Not Found"})
        }}
    );
})
