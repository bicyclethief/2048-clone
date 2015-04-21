
### Internal
- 4x4 nested array
- always simulate a "left" move
- rotate and transpose board as necessary to convert up, down, right move into a
  left move 
- Cell class
  - attributes:
    - hasDoubled
    - value

### Spawning
- might be easier to spawn a new number with the board as a string instead of a
  2d array?

### Write Jasmine tests for simple positions:
  - 2 0 0 0
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 0 2 0 0
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 2 2 0 0
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 2 0 0 2
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 0 0 2 2
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 4 0 2 2
    0 0 0 0
    0 0 0 0
    0 0 0 0
  - 2 2 2 2
    0 0 0 0
    0 0 0 0
    0 0 0 0

