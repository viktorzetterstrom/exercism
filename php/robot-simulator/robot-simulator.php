<?php



class Robot {
  const DIRECTION_NORTH = [0, 1];
  const DIRECTION_EAST = [1, 0];
  const DIRECTION_SOUTH = [0, -1];
  const DIRECTION_WEST = [-1, 0]; 

  function __construct(array $pos, array $dir) {
    $this->position = $pos;
    $this->direction = $dir;
  }

  public function turnRight(): Robot {
    if($this->direction == ROBOT::DIRECTION_NORTH) $this->direction = ROBOT::DIRECTION_EAST;
    else if($this->direction == ROBOT::DIRECTION_EAST) $this->direction = ROBOT::DIRECTION_SOUTH;
    else if($this->direction == ROBOT::DIRECTION_SOUTH) $this->direction = ROBOT::DIRECTION_WEST;
    else if($this->direction == ROBOT::DIRECTION_WEST) $this->direction = ROBOT::DIRECTION_NORTH;
    return $this;
  }

  public function turnLeft(): Robot {
    if($this->direction == ROBOT::DIRECTION_NORTH) $this->direction = ROBOT::DIRECTION_WEST;
    else if($this->direction == ROBOT::DIRECTION_WEST) $this->direction = ROBOT::DIRECTION_SOUTH;
    else if($this->direction == ROBOT::DIRECTION_SOUTH) $this->direction = ROBOT::DIRECTION_EAST;
    else if($this->direction == ROBOT::DIRECTION_EAST) $this->direction = ROBOT::DIRECTION_NORTH;
    return $this;
  }

  public function advance(): Robot {
    $this->position = [
      $this->position[0] + $this->direction[0],
      $this->position[1] + $this->direction[1],
    ];
    return $this;
  }

  public function instructions(string $instructions):void {
    foreach(str_split($instructions) as $instruction) {
      switch ($instruction) {
        case 'A': $this->advance(); break;
        case 'R': $this->turnRight(); break;
        case 'L': $this->turnLeft(); break;
        default: throw new InvalidArgumentException();
      }
    }
  }
}