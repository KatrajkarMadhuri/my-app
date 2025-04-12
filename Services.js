import React from 'react';
import MachineToolServiceList from './components/MachineToolServiceList';  // Correct import path
import AddMachineToolServiceForm from './components/AddMachineToolServiceForm';  // Correct import path
import { addMachineToolService } from './services/serviceAPI';  // Correct import path

const Services = () => {
    const handleAddService = async (newService) => {
        const addedService = await addMachineToolService(newService);
        return addedService;  // Return the newly added service
    };

    return (
        <div>
            <h1>Our Machine Tool Services</h1>
            <AddMachineToolServiceForm onAddService={handleAddService} />
            <MachineToolServiceList />
        </div>
    );
};

export default Services;
