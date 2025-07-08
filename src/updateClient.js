import { createClient } from 'contentful-management';

const managementClient = createClient({
    accessToken: 'CFPAT-d5KFr4R9Or7n93pp4l6h5wcYpZgNqK5h8O5uW2pf604'
});

export function getManagementEnvironment(){
    return managementClient
    .getSpace('hsyce8yhh3qe')
    .then(space => space.getEnvironment('master')
);
}