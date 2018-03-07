
package mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import kursach.model.Lot;
import org.codehaus.jackson.map.ObjectMapper;


public class JsonLotMapper {
    
    public static String toJSON(Lot lot)
    {
    try{
            
    ObjectMapper mapper = new ObjectMapper();
    String json=mapper.writeValueAsString(lot);
    return json;
        }
        catch (IOException ex)
        {
        Logger.getLogger(JsonLotMapper.class.getName()).log(Level.SEVERE,null,ex);
        }
        return null;
    }
    
    public static String toJSON(List<Lot>lot)
    {
    try {
            ObjectMapper mapper = new ObjectMapper();
            String json=mapper.writeValueAsString(lot);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonLotMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    public static Lot fromJSON(String json)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            Lot lot = (Lot)mapper.readValue(json, Lot.class);
            return lot;
        } catch (IOException ex) {
            Logger.getLogger(JsonLotMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}

