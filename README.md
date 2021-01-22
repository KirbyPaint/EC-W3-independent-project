# _TEMPLATE_

#### _Website to <PURPOSE>_

#### By _**Ash Porter (KirbyPaint)**_

## Description

_The purpose of this website is to <DETAILED PURPOSE>_

## Setup/Installation Requirements

* _Please use either a currently updated Firefox or Chrome web browser._

## Specifications

Describe: FUNCTION()\
Test: "Expected Function Desire Here"\
Code: actual code to run\
Expect(FUNCTION(input).toEqual(RESULT);

Describe: createArray()\
Test: "Function will return an array from 0 to the user-inputted number"\
Code: const inputArray = createArray(input);\
Expect(createArray(5).toEqual([0, 1, 2, 3, 4, 5]);
Status: Passing

Describe: arrayTest()\
Test: "Function will test array for the following conditions:"\
1: "If array element contains the number 1, replace with Beep UNLESS"\
2: "If array element contains the number 2, replace with Boop UNLESS"\
3: "If array element contains the number 3, replace with Won't you be my neighbor?"\
Code: const outputArray = arrayTest(inputArray);\
Expect(arrayTest(inputArray[5]).toEqual(0, Beep, Boop, Won't you be my neighbor, 4, 5);
Status: Failing

## Known Bugs

## Support and contact details

_Discord: @KirbyPaint#0751_

## Technologies Used

_HTML, CSS (Bootstrap), JavaScript (jQuery)_

### License Information

_GNU Public License_\

Copyright (c) 2020 **_KirbyPaint_**