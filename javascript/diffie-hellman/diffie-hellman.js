const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

export class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p) || !isPrime(g)) {
      throw new Error("Input to constructor has to be prime numbers");
    }
    this._p = p;
    this._g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error("Invalid private key");
    }
    return this._g ** privateKey % this._p;
  }

  getSharedSecret(privateKey, publicKey) {
    return publicKey ** privateKey % this._p;
  }
}
