#if !defined(QUEEN_ATTACK)
#define QUEEN_ATTACK

#include <string>

namespace queen_attack {

  class chess_board {
    public:
      chess_board() : chess_board(std::make_pair(0, 3), std::make_pair(7, 3)) {};
      chess_board(std::pair<int, int> w_queen, std::pair<int, int> b_queen);
      operator std::string() const;
      std::pair<int, int> white() const;
      std::pair<int, int> black() const;
      bool can_attack() const;

    private:
      std::pair<int, int> white_queen;
      std::pair<int, int> black_queen;
  };
}

#endif