declare const optnew: <T extends new (...args: unknown[]) => {}>
    (Class: T) =>
    & T
    & ((...args: ConstructorParameters<T>) => InstanceType<T>)

export default optnew
