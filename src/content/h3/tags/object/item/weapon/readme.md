--- 
title: weapon
stub: true
noSearch: true
img: weapon.png
caption: Various items all classified as weapons
about: 'tag:h3/weapon'
--- 
**Weapons** are most commonly seen as the wieldable items dropped by AI and found in the environment. However, they are also used for items like the CTF flag, oddball, and weapons attached to [vehicles](~vehicle) or [bipeds](~biped).

Weapons are intended to fire instances of the [projectile](~) tag or [crate](~) tag. Thrown grenades are not a type of weapon, but rather a projectile referenced by [globals](~).

# Weapon flags

- must be readied -  Prevents weapon from being used, attempting to attack with weapon will force drop it, unknown how to set to ready state

- doesn't count towards maximum -  Weapon does not count towards 2 weapon soft limit, allowing weapon to become a third or fourth weapon on the player

- aim assists only when zoomed -  Disables bullet magnetism and red reticle when unzoomed

- prevents grenade throwing -  Prevents grenade throwing.... unknown else behavior

- prevents melee attack -  Disables melee attacks with weapon

- detonates when dropped -  When this weapon is not being held by a unit or model it explodes, uses the parent item tag for detonation values and references

- cannot fire at max age -  Causes weapon to be unable to be fired once it reaches max age

- secondary trigger overrides grenades -  If the secondary trigger key is also bound to grenade throw, this flag forces no grenade throw

- support weapon -  Removes grenade and equipment chud icons, causes weapon to be dropped when a melee attack is performed and disables grenade throwing

- AIs use melee damage -  Causes AI characters to use the melee damage of the weapon instead of their biped melee damage value

- forces no binoculars -  Disables binoculars on weapon, binoculars are separate from weapon zoom

- loop fp firing animation -  Unknown, Loops first person firing animation?

- prevents crouching -  Prevents user from crouching while this weapon is equipped, only applies to players

- cannot fire while boosting -  Weapon is not allowed to fire while unit is boosting, used for weapons on vehicles with a boost

- use empty melee on empty -  Used on melee weapons to force empty melee animation when weapon has reached max age

- uses 3rd person camera -  Forces third person camera when weapon is equipped

- can be dual wielded -  Allows current weapon to accept dual wielding weapons

- can only be dual wielded -  Weapon can only be picked up when holding another dual wield weapon to duel wield with

- melee only -  Weapon becomes a melee weapon, primary trigger becomes melee attack

- can't fire if parent dead -  Unknown/Needs additional research

- weapon ages with each kill -  Seems to apply to melee weapons only, causes age to be incurred upon killing an enemy

-  weapon uses old dual fire error code -  When dual wielded and firing a single weapon, use single weapon error value, without flag means dual 
- wield error value regardless of firing both weapons at the same time or not

- allows unaimed lunge -  Allows melee weapons to play lunge melee animation even when not in range of a target to lunge at

- cannot be used by player -  Weapon cannot be picked up by player, if held is dropped

- hold fp firing animation -  Unknown/Needs additional research

- strict deviation angle -  Disables bullet magnetism while keeping red reticle

*secondary flags*

- magnetizes only when zoomed -  Disables aim assist when unzoomed

- force enable equipment tossing -  Unknown/Needs additional research

- non- lunge melee dash disabled -  Disables lunge movement when enacting a melee on a target using the dedicated melee key

# Heat

{% alert %}
For values of 0 to 1 these represent percentages, so 0.2 = 20%
{% /alert %}

heat recovery threshold: From 0 to 1 determines at what level of heat the weapon is allowed to fire again after being overheated

overheated threshold: From 0 to 1 determines at what level of heat the weapon becomes overheated, needs to be higher than the recovery threshold

heat detonation threshold: From 0 to 1 determines when the weapon is allowed to explode after surpassing the given value of heat

heat detonation fraction: From 0 to 1 determines the chance the weapon explodes when it's heat has surpassed the detonation threshold and it is fired

heat loss per second: From 0 to 1 determines how much heat the weapon loses while it is not being fired, or in- between firing

heat illumination: From 0 to 1 determines how much the illumination function is raised as the weapon gains heat

overheated heat loss per second: From 0 to 1 determines how much heat the weapon loses while it is in the overheated state, this state ends when the heat level reaches the recovery threshold

overheated: [sound](~) / [effect](~) -  Effect or sound played when weapon enters overheated state

overheated damage effect: [damage_effect](~) / [damage_response_definition](~) -  Damage or damage response played when weapon enters overheated state

detonation: [sound](~) /  [effect](~) -  The sound or effect that plays upon weapon detonation due to heat conditions

detonation damage effect: [damage_effect](~) / [damage_response_definition](~) -  The damage or damage response played when the weapon detonates due to heat conditions

player melee damage: [damage_effect](~) -  Unknown/Needs additional research

player melee response: [damage_effect](~) / [damage_response_definition](~) -  Unknown/Needs additional research

# Melee

## Melee damage parameters

damage pyramid angles: Unknown/Needs additional research

damage pyramid depth: When initiating a melee attack, the damage itself is thrown this far out, can be farther than the melee lunge range

# Zoom

magnification levels: Value determining how many levels of zoom this weapon provides, 2 is soft limit for compatible [chud_definition](~) tags

magnification range: A set of values for min and max, for a weapon with more than 1 zoom level the min is used for the first level of zoom and the max is used for the last level of zoom, if a single zoom level is set the min zoom value is used

# Weapon aim assist

autoaim angle: Angle in which projectiles from this weapon are magnetized towards targets within autoaim range

autoaim range: Maximum range of red reticle and in which projectiles can be magnetized towards targets

autoaim falloff range: At what range does the strength of projectile magnetism begin to fall off before the maximum distance

magnetism angle: Angle in which the game applies aim assist to controllers when aiming over a target within magnetism range

magnetism range: Maximum range in which the game will apply aim assist to controllers aiming over a target

magnetism falloff range: Range in which the strength of aim assist for controllers begins to fall off before maximum distance

deviation angle: Funtions the same as autoaim angle, but ignores the 'strict deviation angle' weapon flag

# Movement

{% alert %}
movement penalty values work as percentages in increments of 0.1, incorrect values will be rounded down
(example: 0.28 = 28% movement speed penalty but this will be rounded down to 0.2 or 20%)
{% /alert %}


*movement penalized (flags)*

- always -  always
- when zoomed -  only when zoomed
- when zoomed or reloading -  always until reloading

forward movement penalty: Value of 0 to 1 as a fraction of player forward and backward speed lost when movement is penalized

sideways movement penalty: Value 0 to 1 as a fraction of player sideways speed lost when movement is penalized

# Ai targeting parameters

ai scariness: This value defines how much scariness this weapon contributes against other AI characters, allowing it to trigger certain behaviors like retreating or taking cover. see the [character](~) tag for more info about how AI scariness is calculated and what thresholds are used for certain behaviors.

# Weapon firerate bonus info

{% figure src="rps&frt.png" %}
Pictured: An example of rate of fire and fire recovery time
{% /figure %}

When using the **rate of fire** field in the weapons barrel block, you are given a set of 2 bound values to enter, due to limitations implemented by 343 to retain 30 tick engine behavior you may only enter values compatible with 30 tick engines. **0.46875** is the lowest possible value allowed due to the *idle_ticks* timer only being a max value of 127, thus this value has the weapon fire on the 128th tick. To find all other compatible values, do 30 divided by a *whole* number between 1 and 64. Invalid values will round *down* to the nearest valid (Example: 16 will behave as 15).

When using the **fire recovery ** field in the weapons barrel block, you are given a single value (in seconds) to enter, this value is able to accept 60 tick engine values, there is a built- in 2 tick base delay *plus* a second minimum delay of 2 ticks so the fastest possible rate of fire achievable with fire recovery delay is **12** rounds per second with a value of 0.

# First- person movement control (Misc)

runtime power on velocity: Unknown and expert mode

runtime power off velocity: Unknown and expert mode

max movement acceleration: Unknown

max movement velocity: Unknown

max turning acceleration: Unknown

max turning velocity: Unknown

deployed vehicle: [vehicle](~) Unknown

tossed weapon: [weapon](~) When a unit holding the parent weapon is killed, this weapon replaces the one they were holding and falls to the ground

age effect: [effect](~) The effect played when a weapon becomes depleted

aged material effects: [material_effects](~) This replaces the normal materiel effect of the weapon when it has become depleted

external aging amount: Amount of age as a percentage applied to weapon, used for melee weapons that lack a barrel and trigger

campaign external aging amount: Same as above but for campaign only, above applies to multiplayer

first person weapon offset: A series of 3 values what determine the weapon offset:
- _i: depth from camera, positive is farther from camera_
- _I: horizontal axis from camera, positive moves to the left_
- _k: verticle axis from camera, positive moves upward_

first person weapon offset override: Same as above but is only used for centered crosshairs

first person scope size: Unknown

support third person camera range: Requires support weapon flag, prevents camera from being moved past the set values along the vertical axis in third person camera view

weapon zoom time: Time in seconds the weapon takes to fully zoom in, the function is linear based on the time

weapon ready- for- use time: Time in seconds the weapon is unable to be used for after being readied, used for melee weapons

unit stow anchor name: The name of the render model marker this weapon attaches to when stowed
