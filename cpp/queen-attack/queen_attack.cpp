#include "queen_attack.h"

queen_attack::chess_board::chess_board(std::pair<int, int> w_queen, std::pair<int, int> b_queen) {
  if (w_queen == b_queen) throw std::domain_error("Queen positions must be distinct");
  white_queen = w_queen;
  black_queen = b_queen;
}

queen_attack::chess_board::operator std::string() const {
  std::string str = "";

  for (int row = 0; row < 8; row++) {
    for (int col = 0; col < 8; col++) {
      if (std::make_pair(row, col) == white_queen) {
        str.push_back('W');
      } else if (std::make_pair(row, col) == black_queen) {
        str.push_back('B');
      } else {
        str.push_back('_');
      }

      if (col < 7) str.push_back(' ');
    }
    str.push_back('\n');
  }

  return str;
}

std::pair<int, int> queen_attack::chess_board::white() const {
  return white_queen;
}

std::pair<int, int> queen_attack::chess_board::black() const {
  return black_queen;
}

bool queen_attack::chess_board::can_attack() const {
  bool attack_possible = false;
  // Check horizontal and vertical, then diagonals
  if (white_queen.first == black_queen.first 
   || white_queen.second == black_queen.second
   || white_queen.first - black_queen.first == white_queen.second - black_queen.second
   || white_queen.first - black_queen.first == black_queen.second - white_queen.second) {
    attack_possible = true;
  } 
  return attack_possible;
}