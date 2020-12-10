const { getOwnPropertyDescriptors, defineProperties, setPrototypeOf, getPrototypeOf } = Object

    , optnew = Class => setPrototypeOf(defineProperties({
        [Class.name]: function (...args) {
            return new Class(...args)
        }
    }
    [Class.name], getOwnPropertyDescriptors(Class)), getPrototypeOf(Class))

export default optnew
