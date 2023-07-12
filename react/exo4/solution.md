# Partie 1 et 2

Pour les composants `Header` et `Footer`, on peut utiliser le code suivant :

```jsx
const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
```

```jsx
const Footer = ({ text }) => {
  return <p>{text}</p>;
};

export default Footer;
```

# Partie 3

Pour le composant `Article`, on peut utiliser le code suivant :

```jsx
const Article = ({ title, text }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src="www.image.com/chat" alt="une image de chat">
    </div>
  );
};

export default Article;
```

On remarque toutefois que le composant `Article` est composé de deux éléments : un titre et une image. On peut donc créer deux composants `Title` et `Image` :

```jsx
const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

export default Title;
```

```jsx
const Image = ({ imgPath, imgAlt }) => {
  return <img src={imgPath} alt={imgAlt} />;
};

export default Image;
```

On peut ensuite utiliser ces composants dans le composant `Article` :

```jsx
import Title2 from "../Title2";
import Image from "../Image";

const Article = ({ title, imgPath, imgAlt, children }) => (
  <article>
    <Title2 title={title} />
    <Image imgPath={imgPath} imgAlt={imgAlt} />
    <div>{children}</div>
  </article>
);

export default Article;
```

On peut ainsi passer autant de contenu que l'on souhaite dans le composant `Article` :

```jsx
<Article
  title="Un article"
  imgPath="www.image.com/chat"
  imgAlt="une image de chat"
>
  <p>Un paragraphe</p>
  <p>Un autre paragraphe</p>
</Article>

<Article
  title="Un autre article"
  imgPath="www.image.com/chien"
  imgAlt="une image de chien"
>
  <p>Un paragraphe</p>
  <p>Un autre paragraphe</p>
</Article>
```

# Partie 4

On peut utiliser des composants pour créer des composants plus complexes. Par exemple, on peut créer un composant `RoundBorder` qui affiche un composant `div` avec une bordure arrondie et un padding de 10px.

Cela permet de réutiliser ce composant dans d'autres composants et de ne pas lier un composant qui donne de l'information (le contenu) à un composant qui donne du style (la bordure arrondie et le padding).

```jsx
const RoundBorder = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
```

On peut ensuite utiliser ce composant en wrapppant le contenu que l'on souhaite afficher dans le composant `RoundBorder` :

```jsx
<RoundBorder>
  <p>Un paragraphe</p>
  <p>Un autre paragraphe</p>
</RoundBorder>
```

Avec le composant `Article` :

```jsx
<RoundBorder>
  <Article
    title="Un article"
    imgPath="www.image.com/chat"
    imgAlt="une image de chat"
  >
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </Article>
</RoundBorder>
```

On remarque que la couleur de la bordure est noire. On peut ajouter une propriété `color` au composant `RoundBorder` qui permet de changer la couleur de la bordure :

```jsx
const RoundBorder = ({ children, color }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
```

On peut ensuite utiliser ce composant en wrapppant le contenu que l'on souhaite afficher dans le composant `RoundBorder` :

```jsx
<RoundBorder color="red">
  <p>Un paragraphe</p>
  <p>Un autre paragraphe</p>
</RoundBorder>
```

On peut ajouter une couleur par défaut :

```jsx
const RoundBorder = ({ children, color = "black" }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
```

Enfin, on peut aussi utiliser un `css module` pour définir le style du composant `RoundBorder` :

```jsx
import styles from "./RoundBorder.module.css";

const RoundBorder = ({ children, color = "black" }) => {
  if (color === "black") {
    color = styles.black;
  } else if (color === "red") {
    color = styles.red;
  }

  return <div className={styles.roundBorder}>{children}</div>;
};
```

```css
.roundBorder {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}

.black {
  border: 1px solid black;
}

.red {
  border: 1px solid #ff5820;
}
```

En utilisant un `css module`, on peut définir plusieurs couleurs custom et les utiliser dans le composant `RoundBorder`.

# Partie 5

Nous avons créer un composant `RoundBorder` qui affiche un composant `div` avec une bordure arrondie et un padding.

On peut utiliser la même technique pour wrapper des groupes de composants et ainsi réaliser un layout.

Par exemple, on peut créer un composant `FlexboxContainer` qui affiche un composant `div` avec un display flex et un flex-wrap wrap :

```jsx
const FlexboxContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};
```

On peut ensuite utiliser ce composant en wrapppant le contenu que l'on souhaite afficher dans le composant `FlexboxContainer` :

```jsx

<FlexboxContainer>
  <p>Un paragraphe</p>
  <p>Un autre paragraphe</p>
</FlexboxContainer>

<FlexboxContainer>
  <Article
    title="Un article"
    imgPath="www.image.com/chat"
    imgAlt="une image de chat"
  >
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </Article>
</FlexboxContainer>
```

On remarque que le composant `FlexboxContainer` ne permet pas de modifier les propriétés CSS `justifyContent`, `align-items`, `column`, `wrap`. On peut ajouter ces propriétés au composant `FlexboxContainer` qui permet de changer la valeur des propriétés CSS correspondantes :

```jsx
const FlexboxContainer = ({
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  column = false,
  wrap = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent,
        alignItems,
        flexDirection: column ? "column" : "row",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
};
```

Comme pour le composant `RoundBorder`, on peut utiliser un `css module` pour définir le style du composant `FlexboxContainer` :

```jsx
import styles from "./FlexboxContainer.module.css";

const FlexboxContainer = ({
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  column = false,
  wrap = false,
}) => {
  let justifyContentStyle = "";
  let alignItemsStyle = "";

  if (justifyContent === "center") {
    justifyContentStyle = styles.justifyCenter;
  } else if (justifyContent === "space-between") {
    justifyContentStyle = styles.justifySpaceBetween;
  } else if (justifyContent === "space-around") {
    justifyContentStyle = styles.justifySpaceAround;
  } else if (justifyContent === "space-evenly") {
    justifyContentStyle = styles.justifySpaceEvenly;
  } else if (justifyContent === "flex-start") {
    justifyContentStyle = styles.justifyFlexStart;
  } else if (justifyContent === "flex-end") {
    justifyContentStyle = styles.justifyFlexEnd;
  } else {
    justifyContentStyle = styles.justifyCenter;
  }

  if (alignItem === "center") {
    alignItemsStyle = styles.alignCenter;
  } else if (alignItem === "flex-start") {
    alignItemsStyle = styles.alignFlexStart;
  } else if (alignItem === "flex-end") {
    alignItemsStyle = styles.alignFlexEnd;
  } else if (alignItem === "baseline") {
    alignItemsStyle = styles.alignBaseline;
  } else if (alignItem === "stretch") {
    alignItemsStyle = styles.alignStretch;
  } else {
    alignItemsStyle = styles.alignCenter;
  }

  return (
    <div
      className={`${styles.container} + ${justifyContentStyle} + ${alignItemsStyle}`}
      style={{
        flexDirection: column ? "column" : "row",
        flexWrap: wrap ? "wrap" : "nowrap",
      }}
    >
      {children}
    </div>
  );
};
```

```css
.container {
  display: flex;
  min-width: 100%;
}

.justifyCenter {
  justify-content: center;
}

.justifySpaceBetween {
  justify-content: space-between;
}

.justifySpaceAround {
  justify-content: space-around;
}

.justifySpaceEvenly {
  justify-content: space-evenly;
}

.justifyFlexStart {
  justify-content: flex-start;
}

.justifyFlexEnd {
  justify-content: flex-end;
}

.alignCenter {
  align-items: center;
}

.alignFlexStart {
  align-items: flex-start;
}

.alignFlexEnd {
  align-items: flex-end;
}

.alignStretch {
  align-items: stretch;
}

.alignBaseline {
  align-items: baseline;
}

.alignSelfCenter {
  align-self: center;
}

.alignSelfFlexStart {
  align-self: flex-start;
}

.alignSelfFlexEnd {
  align-self: flex-end;
}

.alignSelfStretch {
  align-self: stretch;
}

.alignSelfBaseline {
  align-self: baseline;
}

.alignSelfAuto {
  align-self: auto;
}
```

Nous avons ainsi designé un composant avec des classes CSS utilitaires qui permettent de modifier le style du composant `FlexboxContainer` en fonction des propriétés passées en paramètre.

Une autre technique auraient été d'utiliser `tailwindcss` pour définir les classes CSS utilitaires.

Maintenant que nous avons un composant `FlexboxContainer`, nous pouvons l'utiliser pour créer un layout :

```jsx
<FlexboxContainer
  column
  wrap
  alignItems="space-between"
  justifyContent="center"
>
  <RoundBorder>
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </RoundBorder>
  <RoundBorder>
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </RoundBorder>
</FlexboxContainer>
```

Cette méthode permet d'encastrer des composants les uns dans les autres pour créer des layouts complexes.

On peut même réaliser des variations de composants pour alleger le code :

```jsx
const FlexboxContainerColumn = () => {
  return (
    <FlexboxContainer
      column
      wrap
      alignItems="space-between"
      justifyContent="center"
    >
      {children}
    </FlexboxContainer>
  );
};
```

```jsx
<FlexboxContainerColumn>
  <RoundBorder>
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </RoundBorder>
  <RoundBorder>
    <p>Un paragraphe</p>
    <p>Un autre paragraphe</p>
  </RoundBorder>
</FlexboxContainerColumn>
```

Ce que nous avons appris avec cet exercice :

- Créer des composants simples
- Créer des composants complexes en utilisant des composants simples
- Créer des composants utilitaires
- Créer des layouts en utilisant des composants utilitaires
- Créer des variations de composants pour alleger le code

Ce qui pourrait encore être amélioré :

- L'organisation du dossier `components` pourrait être améliorée : on pourrait créer un dossier `components/layout` pour y mettre les composants utilitaires et un dossier `components/article` pour y mettre les composants `Article`, `Title` et `Image`.
- Le composant `FlexboxContainer` pourrait être amélioré en utilisant `tailwindcss` pour définir les classes CSS utilitaires.
- Les différents composants pourraient être associés dans des composants plus complexes pour créer des layouts plus complexes.
