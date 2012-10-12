# Contextual keyboard

Adding this function to your functions/main.ts allows you to provide contextual keyboards for specific entry into forms on iOS and Android devices. For example, the full QWERTY keyboard is silly to use for entering a price, there is a specific numeric keyboard specially designed to make that task easy. Entering emails for logins are also cumbersome on the standard keyboard, iOS provides a special email keyboard to facilitate typing emails (with the '@' symbol).

This two functions makes it very easy to define what kind of keyboard should popup when the user is entering information onto a mobile form.

## Supported keyboards:
1. numeric - 0-9 input.
2. email - QWERTY keyboard with extra keys for '.' and '@'.
3. tel - specific for telephone numbers. Provides '+','*' & '*'.
4. url - keyboard for entering URLs.

## Usage
There are two functions that act nearly the same. One is for being in the scope of a node, the other is for targeting a node.

If you are working in the scope of an input node, you can use keyboard(Text %type) and it will set the text input to that keyboard type.

Example:

$(".//input[@name='minAsk']"){
keyboard('numeric')
}

If you wish to target a specific element, you can use an XPATH selector along with the keyboard type.

Example:

contextual_keyboard(".//input[@name='email']", "email")

## Future work:

1. Full testing on other devices. So far this has been tested with iOS and some limited testing with Android. Would be nice to know it works on all devices that support virtual keyboards

2. Custom keyboards -  the 'tel' sets a pattern for the numeric keyboard. Might be interesting to see if custom keyboards could be made for special purposes, like math operators or dates.

3. HTML 5/ jQueryUI slider - Might be fun to provide support for sliders when entering price ranges.

4. A single function - instead of having two different functions, if the XPATH could be optional, maybe it could just be condensed down to a single function.