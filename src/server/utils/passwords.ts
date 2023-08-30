import * as bcrypt from 'bcrypt';

export function generateHash(password: string) {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function compareHash(password: string, hashed: string) {
    return bcrypt.compareSync(password, hashed);
}

// $2b$12$PO9gfACxhpI2OUfZ/B3WfOedBScRtMB82aQjb8ntAcJIT4VcAlEMi