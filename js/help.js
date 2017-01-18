// The big question for this is 'what do all teams have in common?' 
// That can mean two different things:

//  1. *They literally all share the same value.* For example, if you were making a `Money` object,
//      then all instances of `Money` could share the same `toUSD()` function, but should not share 
//      the same `amount` (since different instances are probably intended to represent different 
//      amounts).
//  2. *They all have the same property, but the property has a different value for each object*. 
//      This is the case for the `amount` property in the currency example above.

// In Case 1, you should add this item to the prototype, which means that a single value will be 
// shared across all instances. In Case 2, you should add this property directly to the object.

// So, for teams, we've basically got two places we can put object properties: directly on the 
// objects in the constructor (Case 2 above) or on the `Team` prototype. The `Team` prototype 
// should be shared by both `ChasersTeam` and `RunnersTeam`, so anything added to the `Team` 
// prototype is going to be accessible (and SHARED) by every ChasersTeam and RunnersTeam instance.

// Now to the good stuff:

// - Ye Olde `Team` had four properties: `name`, `roster`, `add`, and `won` (see Team constructor).
// - `name`: would not be good to share across all instances since `ChasersTeam` should have a 
//    different name than `RunnersTeam`. Case 2 above.
// - `roster`: would not be good to share across all instances since each team has its own roster. 
//    Adding someone to team 1 shouldn't also add them to team 2. Case 2 above.
// - `add`: is totally fine to share. The exact same function would have to be written in both 
//    places, so its DRY'er to add to the prototype. Case 1 above.
// - `won`: this one is more flexible; this would be similar to `displayText()` that we did at the 
//    end of class today. the easiest way would be to leave this in the constructors (case 2), but 
//    IRL i'd probably create a function in the prototype called `won()`, which calls 
//    `this.hasWon()` (a different property, added to each constructor). It's sorta a combo of 
//    Case 1+2, but you can also just do it as 2.