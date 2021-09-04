module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {

    /* --- Possible Errors --- */

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    /* --- Best Practices --- */

    'complexity': ['error', 20], //* Basically gets mad about massive code blocks
    // 'default-case-last'           : 'error', // Enforce default case to be last in switch
    'default-param-last': 'error', // Enforce default parameter to be specified last
    'dot-location': ['warn', 'property'], // Dot located on left with multiline dotnotation
    'vue/dot-location': ['warn', 'property'], // Dot located on left with multiline dotnotation
    'eqeqeq': 'error', // Enforce triple equals (===)
    'vue/eqeqeq': 'error', // Enforce triple equals (===)
    'vue/no-empty-pattern': 'error', // Disallow e.g. 'var [] = foo;'
    'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
    // 'no-magic-numbers'             : 'error', // Would enhance readibility but requires a lot of refactoring
    'no-multi-spaces': 'warn', // Avoid useless spaces
    'vue/no-multi-spaces': 'warn', // We want to avoid useless spaces
    'no-new': 'error', // Ensures that there are no new calls without assignment
    'no-new-wrappers': 'error', // Disallows e.g. new String("foo")
    'no-return-await': 'warn', // Return await is known reason for performance hazards. See: https://jakearchibald.com/2017/await-vs-return-vs-return-await/
    'no-self-compare': 'error', // Disallows e.g. if ( x === x ) {...}
    'vue/no-sparse-arrays': 'error', // Disallow e.g. '[ "red",, "blue" ]'
    'no-throw-literal': 'error', // Aims to maintain consistency by allowing throwing only Error objects
    'no-unmodified-loop-condition': 'error', // Verifies that loops condition is possible to change
    'no-unused-expressions': [ // Disallows expressions that can not have effect on the state of the program
      'error', {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-useless-concat': 'error', // Warns in lines such as "`some` + `string`"
    'vue/no-useless-concat': 'error', // Warns in lines such as "`some` + `string`"
    'no-useless-return': 'warn', // Disallows return statements with no effect
    'prefer-promise-reject-errors': 'error', // Same as 'no-throw-literal' but for promises. Aims to mandate rejecting always using Error objects
    // 'prefer-regex-literals'       : ['error', { disallowRedundantWrapping: true }], // Demands new RegExp calls to have dynamic pattern

    /* --- Stylistic Issues --- */

    'array-bracket-newline': ['warn', { multiline: true }],
    'vue/array-bracket-newline': ['warn', { multiline: true }],
    'array-bracket-spacing': ['warn', 'never', { singleValue: true, objectsInArrays: false, arraysInArrays: false }], // Handles white space in arrays
    'vue/array-bracket-spacing': ['warn', 'never', { singleValue: true, objectsInArrays: false, arraysInArrays: false }], // Handles white space in arrays
    'array-element-newline': ['warn', 'consistent'],
    'block-spacing': 'warn', // Adds white space next to curly braces
    'vue/block-spacing': 'warn', // Adds white space next to curly braces
    'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }], // Regular way of wrapping functions
    'vue/brace-style': ['warn', 'stroustrup', { allowSingleLine: true }], // Regular way of wrapping functions
    // 'capitalized-comments'          : 'warn', //* All comments get auto-capitalized
    'comma-dangle': ['warn', 'only-multiline'], // Handle trailing commas
    'vue/comma-dangle': ['warn', 'only-multiline'], // Handle trailing commas
    'comma-spacing': 'warn', // Require space after comma
    'vue/comma-spacing': 'warn', // Require space after comma
    'comma-style': 'warn', // Moves comma always to end of line
    'vue/comma-style': 'warn', // Moves comma always to end of line
    'computed-property-spacing': 'warn', // E.g. obj[ 'foo'] is disallowed
    'eol-last': 'warn', // Enforce empty line at the end of files
    'func-call-spacing': 'warn', // E.g. 'foo ()' is disallowed
    'vue/func-call-spacing': 'warn', // E.g. 'foo ()' is disallowed
    'function-call-argument-newline': ['warn', 'consistent'], // Demands function arguments to be on same line or all on own lines
    'function-paren-newline': 'warn', // Works together with above to open parenthesis to span multiple rows
    'implicit-arrow-linebreak': 'warn', // Demands implicit arrow functions to be on one row
    'indent': ['warn', 2], // Indent with 2 spaces
    'key-spacing': 'warn', // Can handle this file ish layouts
    'vue/key-spacing': 'warn', // Can handle this file ish layouts
    'keyword-spacing': 'warn', // Demands space after every keyword e.g. "if ()"
    'vue/keyword-spacing': 'warn', // Demands space after every keyword e.g. "if ()"
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'max-depth': 'error', //* Specifies maximum nested block depth, default 4
    'max-nested-callbacks': 'error', // Default 10
    'max-params': ['error', 10], // ! Way too high, default is 3 !
    'vue/max-attributes-per-line': ['warn', { singleline: 6, multiline: { max: 1, allowFirstLine: true }}], // *
    // 'multiline-comment-style'       : 'warn', // Converts multi-line comments to such as aboves
    'multiline-ternary': ['warn', 'always-multiline'], // Splits complex ternary to multiple lines
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }], // Breaks chained method calls to multiple lines
    'no-lonely-if': 'warn', // Disallows if statement as only statement under else blocks
    'no-tabs': 'error', // Disallows usage of tabs instead of spaces
    'no-trailing-spaces': 'warn', // Disallows unneccesary white space in line ending
    'no-unneeded-ternary': 'error', // Disallows e.g. "x === 2 ? true : false"
    'no-whitespace-before-property': 'warn', // Disallows e.g. "this.  foo()"
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always', { objectsInObjects: false, arraysInObjects: false }], // Handles white space in objects
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'vue/object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'vue/object-curly-spacing': ['warn', 'always', { objectsInObjects: false, arraysInObjects: false }], // Handles white space in objects
    'vue/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'operator-assignment': 'warn', // Enforces usage of operators such as ++ when possible
    'operator-linebreak': ['warn', 'before'], // Places multiline operators to left side of line
    'vue/operator-linebreak': ['warn', 'before'], // Places multiline operators to left side of line
    'prefer-exponentiation-operator': [ 'warn' ],
    'prefer-object-spread': 'warn', // Prefer use of an object spread over Object.assign
    'quote-props': ['warn', 'consistent-as-needed'], // Quote all prop names if any is required to be quoted
    'quotes': ['warn', 'single'], // Use single quotes
    'semi': ['warn', 'never'], // Remove semicolons
    'semi-style': ['error', 'first'], // Adds semicolon to line begin if it's needed
    'space-before-blocks': 'warn', // E.g. 'foo(){' is disallowed
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }], // Disallowes e.g. 'foo ()'
    'space-in-parens': 'warn', // Disallows e.g. 'foo( a, b )'
    'space-infix-ops': 'warn', // Disallows e.g. '1 +2'
    'space-unary-ops': 'warn', // Disallows e.g. '++ i'
    'vue/space-in-parens': 'warn', // Disallows e.g. 'foo( a, b )'
    'vue/space-infix-ops': 'warn', // Disallows e.g. '1 +2'
    'vue/space-unary-ops': 'warn', // Disallows e.g. '++ i'
    'spaced-comment': ['warn', 'always', { exceptions: [ '-' ]}], // Disallows comments such as //Foo
    'switch-colon-spacing': 'warn', // Disallows e.g. 'case 0 :break'

    /* --- ES6 --- */

    'arrow-body-style': ['warn', 'as-needed'], // Remove curly braces from arrow functions if possible
    'arrow-parens': ['warn', 'as-needed'], // Remove parenthesis from arrow functions
    'arrow-spacing': 'warn', // Uniform arrow function spacing
    'vue/arrow-spacing': 'warn', // Uniform arrow function spacing
    'no-useless-rename': 'warn', // Disallows e.g. "import 'foo' as 'foo'"
    'no-var': 'error', // Discourage usage of var
    'object-shorthand': ['error', 'always'], // Removes unnecessary function word in methods
    'prefer-const': 'error', // Switch to const if no reassign
    'prefer-destructuring': [ // Converts e.g. "foo = bar.foo" -> "[ foo ] = bar"
      'error', {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false }
      }
    ],
    'prefer-numeric-literals': 'error', // Encourages to modern number manipulation
    'prefer-rest-params': 'error', // Disallows using "arguments" keyword in function definition
    'prefer-spread': 'error', // Enforces passing variadic function parameters with spread operator
    'prefer-template': 'warn', // Uses template string when applicable
    'vue/prefer-template': 'warn', // Uses template string when applicable
    'rest-spread-spacing': ['warn', 'never'], // No space after rest parameter triple dot
    'template-curly-spacing': ['warn', 'never'], // Removes white space inside template string variable substitution
    'vue/template-curly-spacing': ['warn', 'never'], // Removes white space inside template string variable substitution

    /* --- Other Vue rules --- */

    'vue/singleline-html-element-content-newline': 'off', // Required to keep edits low. In general not the best option.
    'vue/html-closing-bracket-newline': ['warn', { singleline: 'never', multiline: 'always' }],
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: true }], // Enforce components to be named in PascalCase
    'vue/custom-event-name-casing': ['error', 'kebab-case'], // ! Enforce custom events to be kebab-case
    'vue/new-line-between-multi-line-property': ['warn', { minLineOfMultilineProperty: 6 }], // Enhances readability
    'vue/no-boolean-default': ['error', 'default-false'], // Disallows 'true' as value for boolean poperty because HTML standard always defaults boolean attributes to false
    'vue/no-potential-component-option-typo': ['error', { presets: [ 'all' ]}], // Disallows e.g. declaring "method" instead of "methods"
    'vue/no-reserved-component-names': [
      'error', { // Disallows trying to create component with reserved name
        disallowVueBuiltInComponents: true, // Disallow for Vue2 components
        disallowVue3BuiltInComponents: true // Disallow as well for future Vue3 components
      }
    ],
    'vue/no-unregistered-components': ['error', { ignorePatterns: ['v-*', 'q-*', 'page-*', 'base-*']}], // Verifies that used components are registered and ignore all that start with v- and own global components
    'vue/no-unsupported-features': ['error', { version: '2.6.12' }], // Verifies that no unsupported features are used
    'vue/no-unused-properties': ['error', { groups: ['props', 'data', 'computed', 'methods'], deepData: false }], // Warn of unused properties in Vue components
    'vue/no-useless-mustaches': ['error', { ignoreIncludesComment: true }], // Disallow e.g. {{ 'Lorem ipsum' }}
    'vue/no-useless-v-bind': ['error', { ignoreIncludesComment: true }], // Disallow e.g. v-bind:foo="'bar'" except if comment is present e.g. v-bind:foo="'bar'/* comment */"
    'vue/padding-line-between-blocks': ['warn', 'always'], // Adds linebreak between each same level HTML blocks
    //* 'vue/require-name-property'      : [ 'error' ], // Require explicit name for components. This has real benefits https://forum.vuejs.org/t/why-we-need-to-name-vue-component/30909
    'vue/script-indent': ['warn', 2, { baseIndent: 0, switchCase: 1 }], // Indent script section. However it's not the usual option
    'vue/v-on-event-hyphenation': ['error', 'always', { autofix: false /* Not recommended with Vue2 */ }], // Enforces event names to be kebab-case. This is required with HTML events

    /*
     *
     * ###################################################################
     * #####      GREAT RULES TO USE ONCE EVERYONE HAS THE TOOL      #####
     * ###################################################################
     *
     *
     * ##########   READIBILITY   ##########
     *
     * 'sort-imports': 'warn',                                            // Sorts import declarations within modules
     * 'vue/static-class-names-order'     : 'warn',                       // Automatically sorts element class values alphanumerically
     * 'vue/html-comment-content-newline' : ['warn', { singleline: 'ignore', multiline: 'always' }], // Enforce spacing in html comments
     * 'vue/html-comment-content-spacing' : ['warn', 'always', { exceptions: [ '*' ]}], // Enforce spacing in html comments
     * 'capitalized-comments'             : 'warn',                       // All comments get auto-capitalized
     *
     *
     * ##########  MAINTAINABILITY  ##########
     *s
     * 'complexity'                  : ['error', 20],                     // Basically gets mad of out of control code
     * 'vue/require-name-property'   : [ 'error' ],                       // Require explicit name for components. This has real benefits to code analysis etc. https://forum.vuejs.org/t/why-we-need-to-name-vue-component/30909
     * 'max-lines'                   : 'error',                           // 300 is recommended. Not gonna happen in this project
     * 'max-lines-per-function'      : 'error',                           // Default 50
     * 'max-params'                  : 'error',                           // default is 3
     * 'vue/max-attributes-per-line' : ['warn', { singleline: 6, multiline: { max: 1, allowFirstLine: true }}],
     * 'max-statements'              : 'error',                           // Default 10
     * 'max-statements-per-line'     : 'error',                           // Default 1
     *
     *
     * ##########  QUALITY  ##########
     *
     * 'vue/no-constant-condition' : 'error',                             // Disallow e.g. 'if(true) {...}', Not yet available
     * 'max-depth'                 : 'error',                             // Specifies maximum nested block depth, default 4
     * 'no-debugger'    : process.env.NODE_ENV === 'production' ? 2 : 0,  // Allow debugger during development
     * 'vue/no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,  // Allow debugger during development
     *
     */
  },
}
