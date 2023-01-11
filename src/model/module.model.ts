import { Schema, model } from 'mongoose';

interface IAuth {
    roles: string[]
}

interface IConfig {
    auth: IAuth
}

interface IModule {
    name: string,
    description: string,
    enabled: boolean,
    config: {
        auth: {
            roles: string[]
        }
    }
}

const authSchema = new Schema<IAuth>({
    roles: { type: [String], required: true }
})

const configSchema = new Schema<IConfig>({
    auth: { type: authSchema, required: true }
})

const moduleSchema = new Schema<IModule>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    enabled: { type: Boolean, required: true, default: true },
    config: { type: configSchema, required: true }
})

export const Module = model<IModule>('modules', moduleSchema);