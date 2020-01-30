"use strict";

var nome = 'Elias';
var idade = 25;
/* Quando o nome da propriedade é igual ao nome da variável dentro do objeto, pode deixar apenas um deles, sem precisar repetir.*/

var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'dot'
};
console.log(usuario);
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 1º Exercicio */
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('emailteste@teste.com', 'senha123');
var Admin1 = new Admin('admin@teste.com', 'admin123');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
/* 2º Exercicio */

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}, {
  nome: 'Juliete',
  idade: 27,
  empresa: 'Rocketseat'
}];
/* 2.1 Usando map para retornar apenas a idade */

var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
/* 2.2 Usando filter para retornar apenas pessoas acima de 18 anos e que trabalham na Rocketseat*/

var filter = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === 'Rocketseat';
});
console.log(filter);
/* 2.3 Usando find para encontrar um usuário que trabalhe no Google */

var google = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(google);
/* 2.4 Unindo operações */

var dobro = usuarios.map(function (item) {
  item.idade = item.idade * 2;
  return item;
});
var filter50 = dobro.filter(function (item) {
  return item.idade < 50;
});
console.log(dobro);
console.log(filter50);
/* 3o exercicio - Transformar função em arrow function */

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); //depois

arr.map(function (item) {
  return item * 2;
});
/* 3.2 Transformando função normal em arrow function usando const */

var usuario = {
  nome: 'Diego',
  idade: 26
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario); //depois

var mostraIdade1 = function mostraIdade1(usuario) {
  return {
    idade: idade
  };
};

console.log(mostraIdade1(usuario));
/* 3.3 Arrow functions e valores padrão*/

var nome = "Elias";
var idade = 25;

function mostraUsuario2() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

var showUser = function showUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));
console.log(showUser(nome, idade));
console.log(showUser(nome));
/* 4o Exercicio - Desestruturação*/

var empresa = {
  nome1: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome1 = empresa.nome1,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);
/* 4.2 desestruturação em parâmetros */

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

function mostraInfo2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo2(usuario));
/* 5º Exercicio */

var arr2 = [1, 2, 3, 4, 5, 6];
/* rest com array */

var x = arr2[0],
    y = arr2.slice(1);
console.log(x);
console.log(y);
/* somando todos os parâmetros*/

function soma2() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma2(1, 2, 3, 4, 5, 6));
var user = {
  nome: 'Diogo',
  idade: 24,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
/* copia-se todas as propriedades de um objeto, mudando somente aquela que se deseja*/

var usuario2 = _objectSpread({}, user, {
  nome: 'Gabriel'
});

console.log(usuario2);
/* alterando propriedades aninhadas de um objeto */

var usuario3 = _objectSpread({}, user, {
  endereco: _objectSpread({}, user.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3);
